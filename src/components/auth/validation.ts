import * as Yup from "yup";
import { passwordRegex, phoneRegex } from "@src/utils/regex";

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "2 characters minimum")
    .max(50, "2 characters maximum")
    .required("Enter your name"),
  lastname: Yup.string()
    .min(2, "2 characters minimum")
    .max(50, "2 characters maximum")
    .required("Enter your lastname"),
  phone_number: Yup.string()
    .matches(phoneRegex, "Enter a valid phone number")
    .required("Enter your phone number"),
  email: Yup.string().email("Enter a valid email").required("Enter your email"),
  password: Yup.string()
    .min(8, "8 characters minimum")
    .matches(
      passwordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter and one number"
    )
    .required("Enter a password")
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email").required("Enter your email"),
  password: Yup.string()
    .min(8, "8 characters minimum")
    .matches(
      passwordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter and one number"
    )
    .required("Enter your password")
});
