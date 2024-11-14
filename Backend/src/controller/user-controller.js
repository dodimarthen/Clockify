import userService from "../service/user-service.js";
import { attendanceValidation } from "../validation/user-validation.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const username = req.user.username;
    const result = await userService.get(username);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const username = req.user.username;
    const request = req.body;
    request.username = username;

    const result = await userService.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    await userService.logout(req.user.username);
    res.status(200).json({ data: "OK" });
  } catch (e) {
    next(e);
  }
};

const recordAttendance = async (req, res, next) => {
  try {
    const { checkinTime, checkoutTime } = req.body;

    const username = req.user.username;

    const result = await userService.recordAttendance(
      username,
      checkinTime,
      checkoutTime
    );

    res.status(200).json({
      message: "Attendance recorded successfully",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { register, login, get, update, logout, recordAttendance };
