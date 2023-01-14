import * as yup from "yup";

export const validate = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().min(3).required(),
});
