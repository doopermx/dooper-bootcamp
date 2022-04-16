import React from "react";
import TextInput from "src/components/TextInput";
import useFormConfig from "@src/hooks/useFormConfig";
import { FieldProps } from "@src/hooks/useFormConfig/useFormConfig";
import { Container, StyledButton, Styledform } from "./styles";

const fields: FieldProps[] = [
  {
    id: "firstName",
    initialValue: "",
    placeholder: "",
    label: "First name",
    validate: "text",
    required: true
  },
  {
    id: "lastName",
    initialValue: "",
    placeholder: "",
    label: "Last name",
    validate: "text",
    required: true
  },
  {
    id: "email",
    initialValue: "",
    placeholder: "",
    label: "Email",
    validate: "email",
    required: true
  },
  {
    id: "phone_number",
    initialValue: "",
    placeholder: "",
    label: "Phone number",
    validate: "phone_number",
    required: true
  },
  {
    id: "city",
    initialValue: "",
    placeholder: "",
    label: "City",
    validate: "text"
  },
  {
    id: "state",
    initialValue: "",
    placeholder: "",
    label: "State",
    validate: "text"
  },
  {
    id: "country",
    initialValue: "",
    placeholder: "",
    label: "Country",
    validate: "text"
  },
  {
    id: "photo_url",
    initialValue: "",
    placeholder: "",
    label: "Photo URL",
    validate: "url"
  }
];

function EditProfileForm() {
  const formik = useFormConfig(fields);

  return (
    <Styledform onSubmit={formik.handleSubmit}>
      <Container>
        {fields.map((field) => (
          <TextInput key={field.id} field={field} formik={formik} />
        ))}
      </Container>
      <Container>
        {!formik.dirty || !formik.isValid ? (
          <StyledButton variant="outlined" disabled>
            Submit
          </StyledButton>
        ) : (
          <StyledButton type="submit" variant="contained">
            Submit
          </StyledButton>
        )}
      </Container>
    </Styledform>
  );
}

export default EditProfileForm;
