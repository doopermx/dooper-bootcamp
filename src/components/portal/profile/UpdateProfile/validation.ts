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
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres"),
  state: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres"),
  country: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
});
