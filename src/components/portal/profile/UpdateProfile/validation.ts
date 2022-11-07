import * as Yup from "yup";
import { phoneRegex } from "@src/utils/regex";

export const UpdateProfileSchema = Yup.object().shape({
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
  city: Yup.string()
    .min(2, "2 characters minimum")
    .max(50, "50 characters maximum"),
  state: Yup.string()
    .min(2, "2 characters minimum")
    .max(50, "50 characters maximum"),
  country: Yup.string()
    .min(2, "2 characters minimum")
    .max(50, "50 characters maximum")
});
