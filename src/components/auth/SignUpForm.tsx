import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Box, Button, Grid, TextField } from "@mui/material";
import PasswordField from "@src/components/common/form/components/PasswordField";
import PhoneInput from "../common/form/components/PhoneInput";
import { SignUpSchema } from "./validation";

function SignUpForm() {
  const supabaseClient = useSupabaseClient();

  const router = useRouter();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue
  } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      phone_number: ""
    },
    onSubmit: (values) => {
      const { email, password, phone_number, lastname, name } = values;
      async function signup() {
        const { data, error } = await supabaseClient.auth.signUp({
          email,
          password,
          options: {
            data: {
              email,
              name,
              lastname,
              phone_number
            }
          }
        });
        console.log(data || error);
        !error ? router.push("/profile") : alert(error.message);
      }
      signup();
    },
    validationSchema: SignUpSchema,
    validateOnMount: false
  });

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Grid container direction="column" spacing={1} alignItems="center">
          <Grid item width={"100%"}>
            <TextField
              variant="outlined"
              id="name"
              label="Name"
              type="text"
              error={touched.name && !!errors.name}
              helperText={(touched.name && errors.name) ?? " "}
              fullWidth
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </Grid>
          <Grid item width={"100%"}>
            <TextField
              variant="outlined"
              id="lastname"
              label="Lastname"
              type="text"
              error={touched.lastname && !!errors.lastname}
              helperText={(touched.lastname && errors.lastname) ?? " "}
              fullWidth
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
            />
          </Grid>
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

          <Grid item width={"100%"}>
            <PhoneInput
              id="phone_number"
              name="phone_number"
              label="Phone Number"
              type="tel"
              fullWidth
              required
              onChange={(value) => setFieldValue("phone_number", value)}
              onBlur={handleBlur}
              value={values.phone_number}
              error={touched.phone_number && !!errors.phone_number}
              helperText={(touched.phone_number && errors.phone_number) ?? " "}
            />
          </Grid>
          <Grid item width="100%">
            <Button
              variant="contained"
              fullWidth
              color={"primary"}
              type="submit"
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item width="100%">
            <Box mt={1} textAlign={"center"}>
              Already have an account? {` `}
              <Link href="/login">
                <strong>Login</strong>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default SignUpForm;
