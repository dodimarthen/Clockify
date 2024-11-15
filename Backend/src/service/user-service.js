import { validate } from "../validation/validation.js";
import {
  getUserValidation,
  loginUserValidation,
  registerUserValidation,
  updateUserValidation,
} from "../validation/user-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import {
  checkinValidation,
  checkoutValidation,
} from "../validation/user-validation.js";

const JWT_SECRET = process.env.EXPO_JWT_SECRET;

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
      role: true,
    },
  });
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email,
    },
    select: {
      password: true,
      email: true,
      username: true,
      role: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Email or password wrong");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new ResponseError(401, "Email or password wrong");
  }

  const token = jwt.sign(
    {
      email: user.email,
      username: user.username,
      role: user.role,
    },
    JWT_SECRET,
    { algorithm: "HS256", expiresIn: "24h" }
  );

  return prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      email: user.email,
    },
    select: {
      token: true,
    },
  });
};

const get = async (username) => {
  username = validate(getUserValidation, username);

  const user = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
    select: {
      username: true,
      name: true,
      role: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }
  return user;
};

const update = async (request) => {
  const user = validate(updateUserValidation, request);

  const totalUserInDatabase = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (totalUserInDatabase != 1) {
    throw new ResponseError(404, "user is not found");
  }

  const data = {};
  if (user.name) {
    data.name = user.name;
  }
  if (user.password) {
    data.password = await bcrypt.hash(user.password, 10);
  }

  return prismaClient.user.update({
    where: {
      username: user.username,
    },
    data: data,
    select: {
      username: true,
      name: true,
    },
  });
};

const logout = async (username) => {
  username = validate(getUserValidation, username);

  const user = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }
  return prismaClient.user.update({
    where: {
      username: username,
    },
    data: {
      token: null,
    },
    select: {
      username: true,
    },
  });
};

const recordAttendance = async (
  username,
  checkinTime = null,
  checkoutTime = null
) => {
  try {
    if (checkinTime) {
      await checkinValidation.validate({ checkinTime });
    }
    if (checkoutTime) {
      await checkoutValidation.validate({ checkoutTime });
    }
  } catch (error) {
    throw new ResponseError(400, error.message);
  }

  const user = await prismaClient.user.findUnique({
    where: { username },
  });

  if (!user) {
    throw new ResponseError(404, "User not found");
  }

  const today = new Date().toISOString().split("T")[0] + "T00:00:00.000Z";

  const existingAttendance = await prismaClient.attendance.findFirst({
    where: {
      username,
      date: today,
    },
  });

  if (existingAttendance) {
    if (existingAttendance.checkout_time === null && checkoutTime) {
      return prismaClient.attendance.update({
        where: {
          id: existingAttendance.id,
        },
        data: {
          checkout_time: checkoutTime,
        },
      });
    } else if (existingAttendance.checkout_time !== null) {
      throw new ResponseError(400, "User has already checked out today.");
    } else {
      throw new ResponseError(
        400,
        "Check-out time is required for this entry."
      );
    }
  } else if (checkinTime) {
    return prismaClient.attendance.create({
      data: {
        username,
        checkin_time: checkinTime,
        date: today,
        checkout_time: null,
      },
    });
  } else {
    throw new ResponseError(
      400,
      "Check-in time is required to create an attendance record."
    );
  }
};

export default { register, login, get, update, logout, recordAttendance };
