// attendance-validation.js
import * as yup from "yup";

export const checkinValidation = yup.object().shape({
  checkinTime: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
      "Check-in time must be in the format 'YYYY-MM-DDTHH:mm:ssZ'"
    )
    .required("Check-in time is required"),
});

export const checkoutValidation = yup.object().shape({
  checkoutTime: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
      "Check-out time must be in the format 'YYYY-MM-DDTHH:mm:ssZ'"
    )
    .nullable(),
});
