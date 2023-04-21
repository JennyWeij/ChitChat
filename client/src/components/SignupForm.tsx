import { Box, Button, TextField, Typography } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import { theme } from "../theme";

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignupForm() {
  const handleSubmit = async (values: FormValues) => {
    console.log("Form data:", values);
    await register(values.username, values.password);
  };

  async function register(username: string, password: string) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("User registered:", data);
    } else {
      console.error("Registration error:", data.message);
    }
  }

  return (
    <Box sx={boxPosition}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Create Account</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={formBox}>
                <Typography variant="h4" gridColumn="1" sx={usernameStyling}>
                  Create username
                </Typography>

                <Field name="username">
                  {({ field }: FieldProps) => (
                    <TextField
                      sx={usernameTextField}
                      {...field}
                      variant="outlined"
                      error={touched.username && !!errors.username}
                      helperText={touched.username ? errors.username : ""}
                    />
                  )}
                </Field>

                <Typography variant="h4" gridColumn="1" sx={passwordStyling}>
                  Create password
                </Typography>

                <Field name="password">
                  {({ field }: FieldProps) => (
                    <TextField
                      sx={passwordTextField}
                      {...field}
                      type="password"
                      variant="outlined"
                      error={touched.password && !!errors.password}
                      helperText={touched.password ? errors.password : ""}
                    />
                  )}
                </Field>
              </Box>

              <Box>
                <Button type="submit" variant="contained">
                  Register
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

const boxPosition = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
};

const formBox = {
  width: { xs: "20rem", sm: "25rem", md: "30rem", lg: "32rem" },
  height: "13rem",
  marginTop: "2rem",
  marginBottom: "2.5rem",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "35px",
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: {
    xs: "repeat(4, 1fr)",
    sm: "repeat(4, 1fr)",
    md: "repeat(2, 1fr)",
  },
  gap: "0.2rem",
  alignItems: "center",
  justifyItems: "start",
};

const usernameStyling = {
  marginLeft: {
    xs: "4.5rem",
    sm: "7rem",
    md: "1.5rem",
    lg: "3rem",
  },
  marginTop: {
    xs: "0rem",
    sm: "0rem",
    md: "2rem",
    lg: "2rem",
  },
  gridRow: { xs: "1", sm: "1" },
};

const usernameTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "1", md: "2" },
  gridRow: { xs: "2", sm: "2", md: "1" },
  marginRight: "1rem",
  marginTop: {
    xs: "0rem",
    sm: "0rem",
    md: "2rem",
    lg: "2rem",
  },
  marginLeft: {
    xs: "3rem",
    sm: "5.5rem",
    md: "1.5rem",
    lg: "0.5rem",
  },
};

const passwordStyling = {
  marginLeft: {
    xs: "4.5rem",
    sm: "7rem",
    md: "1.5rem",
    lg: "3rem",
  },
  gridRow: { xs: "3", sm: "3" },
  marginBottom: { xs: "0rem", sm: "0rem", md: "2rem", lg: "2rem" },
};

const passwordTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "1", md: "2" },
  gridRow: { xs: "4", sm: "4", md: "3" },
  marginRight: "1rem",
  marginBottom: { xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" },
  marginLeft: {
    xs: "3rem",
    sm: "5.5rem",
    md: "1.5rem",
    lg: "0.5rem",
  },
};
