import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import PhoneInput from "@src/components/common/form/components/PhoneInput";
import { UpdateProfileSchema } from "./validation";

type User = {
  name: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phone_number: string;
  photo_url: string;
};

const user: User = {
  name: "John",
  lastname: "Doe",
  city: "Austin",
  state: "Texas",
  country: "United States of America",
  email: "johndoe@test.com",
  phone_number: "+15125553890",
  photo_url: "http://airbnboverlast.nl/wp-content/uploads/2016/06/happy-man.jpg"
};

function UpdateProfile() {
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
      ...user
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: UpdateProfileSchema,
    validateOnMount: false
  });

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
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

        <Grid item width={"100%"}>
          <TextField
            variant="outlined"
            id="country"
            label="Country"
            type="country"
            error={touched.country && !!errors.country}
            helperText={(touched.country && errors.country) ?? " "}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.country}
          />
        </Grid>

        <Grid item width={"100%"}>
          <TextField
            variant="outlined"
            id="state"
            label="State"
            type="state"
            error={touched.state && !!errors.state}
            helperText={(touched.state && errors.state) ?? " "}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.state}
          />
        </Grid>

        <Grid item width={"100%"}>
          <TextField
            variant="outlined"
            id="city"
            label="City"
            type="city"
            error={touched.city && !!errors.city}
            helperText={(touched.city && errors.city) ?? " "}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
          />
        </Grid>

        <Grid item width="100%">
          <Button variant="contained" fullWidth color={"primary"} type="submit">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UpdateProfile;
