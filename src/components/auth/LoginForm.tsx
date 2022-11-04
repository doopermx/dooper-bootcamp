import { useFormik } from "formik";
import Link from "next/link";
import { Box, Button, Grid, TextField } from "@mui/material";
import PasswordField from "../common/form/components/PasswordField";
import { LoginSchema } from "./validation";

function LoginForm() {
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: LoginSchema,
      validateOnMount: false
    });

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={1} alignItems="center">
          <Grid item width={"100%"}>
            <TextField
              variant="outlined"
              id="email"
              label="Email"
              type="email"
              error={touched.email && !!errors.email}
              helperText={(touched.email && errors.email) ?? " "}
              fullWidth
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Grid>

          <Grid item width={"100%"}>
            <PasswordField
              variant="outlined"
              id="password"
              label="Password"
              type="password"
              error={touched.password && !!errors.password}
              helperText={(touched.password && errors.password) ?? " "}
              fullWidth
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </Grid>

          <Grid item width="100%">
            <Button
              variant="contained"
              fullWidth
              color={"primary"}
              type="submit"
            >
              Login
            </Button>
          </Grid>

          <Grid item width="100%">
            <Box mt={1} textAlign={"center"}>
              Don&apos;t have an account? {` `}
              <Link href="/signup">
                <strong>Sign Up</strong>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default LoginForm;
