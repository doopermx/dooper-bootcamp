// import { useMemo } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";

export interface FieldProps {
  id: "firstName" | "lastName" | "email" | "password" | "phone_number";
  initialValue: string;
  placeholder: string;
  label: string;
  validate: "firstName" | "lastName" | "email" | "password" | "phone_number";
}

const objectFromArray = (fields: FieldProps[], key: keyof FieldProps) => {
  let mappedProps = fields.map((field) => {
    if (key !== "validate") {
      return [field.id, field[key]];
    }
    return [field.id, validationDictionary[field.validate]];
  });

  return Object.fromEntries(mappedProps);
};

const validationDictionary = {
  firstName: string().required("Required first name"),
  lastName: string().required("Required last name"),
  email: string().email("Please provide a valid email").required(),
  password: string()
    .matches(new RegExp(/(?=.*[a-z])/), "Must contain lowercase a-z characters")
    .matches(new RegExp(/(?=.*[A-Z])/), "Must contain uppercase A-Z characters")
    .matches(new RegExp(/(?=.*[0-9])/), "Must contain at least one number")
    .matches(
      new RegExp(/(?=.*[!@#$%^&*])/),
      "Must contain at least one !@#$%^&* special character"
    )
    .min(8, "Must be at least 8 characters long")
    .trim("Spaces are not allowed")
    .strict()
    .required("Required password"),
  phone_number: string()
    .matches(new RegExp(/^[0-9]+$/), "Must contain only numbers")
    .min(10, "Must be 10 characters long")
    .max(10, "Must be 10 characters long")
    .required()
};

function useFormConfig(fields: FieldProps[]) {
  const initialValues = objectFromArray(fields, "initialValue");
  const validationSchema = object(objectFromArray(fields, "validate"));

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema
  });

  return formik;
}

export default useFormConfig;