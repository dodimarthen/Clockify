import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  name: Joi.string().max(60).required(),
  email: Joi.string().max(200).required(),
  role: Joi.string().max(60).allow("").required(),
});

const loginUserValidation = Joi.object({
  password: Joi.string().max(100).required(),
  email: Joi.string().max(200).required(),
});

const getUserValidation = Joi.string().max(100).required();

const updateUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).optional(),
  name: Joi.string().max(100).optional(),
});

const checkinValidation = Joi.object({
  checkinTime: Joi.date().required(),
});

const checkoutValidation = Joi.object({
  checkoutTime: Joi.date().optional(),
});

export {
  registerUserValidation,
  loginUserValidation,
  getUserValidation,
  updateUserValidation,
  checkinValidation,
  checkoutValidation,
};
