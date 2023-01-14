import * as yup from "yup";

const passwordRuled = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validate = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(3)
    .matches(passwordRuled, { message: "Please create a strong password" })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
