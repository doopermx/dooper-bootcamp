import { Typography } from "@mui/material";
import LoginForm from "@src/components/auth/LoginForm";
import AuthLayout from "@src/components/common/Layout/AuthLayout";
import DocHeader from "@src/components/common/Layout/DocHeader/DocHeader";
import FormContainer from "@src/components/common/form/components/FormContainer";

export default function Login() {
  return (
    <AuthLayout>
      <DocHeader title="Login" />
      <FormContainer>
        <Typography variant="h1" color={"primary"}>
          Login
        </Typography>
        <LoginForm />
      </FormContainer>
    </AuthLayout>
  );
}
