import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  name: Joi.string().max(60).required(),
  email: Joi.string().max(200).required(),
});

const loginUserValidation = Joi.object({
  password: Joi.string().max(100).required(),
  email: Joi.string().max(200).required(),
});

export { registerUserValidation, loginUserValidation };
