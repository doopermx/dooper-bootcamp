import { Typography } from "@mui/material";
import SignUpForm from "@src/components/auth/SignUpForm";
import AuthLayout from "@src/components/common/Layout/AuthLayout/AuthLayout";
import DocHeader from "@src/components/common/Layout/DocHeader/DocHeader";
import FormContainer from "@src/components/common/form/components/FormContainer/FormContainer";

export default function SignUp() {
  return (
    <AuthLayout>
      <DocHeader title="Sign Up" />
      <FormContainer>
        <Typography variant="h1" color={"primary"}>
          Sign Up
        </Typography>
        <SignUpForm />
      </FormContainer>
    </AuthLayout>
  );
}
