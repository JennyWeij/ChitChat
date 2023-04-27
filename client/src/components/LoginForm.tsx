import { Box, Button, TextField, Typography } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
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

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState<string>(" ");
  const handleSubmit = async (values: FormValues) => {
    console.log("Form data:", values);
    const success = await login(values.username, values.password);
    if (success) {
      navigate("/");
    } else {
      setLoginError("Something went wrong. Please try again.");
    }
  };

  return (
    <Box sx={boxPosition}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Sign In</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={loginBox}>
                <Typography variant="h4" gridColumn="1" sx={usernameStyling}>
                  Username
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
                  Password
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
                  Sign in
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

const loginBox = {
  width: { xs: "20rem", sm: "25rem", md: "27rem", lg: "32rem" },
  height: "13rem",
  marginTop: "2rem",
  marginBottom: "2.5rem",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "35px",
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: { xs: "repeat(4, 1fr)", sm: "repeat(2, 1fr)" },
  gap: "0.2rem",
  alignItems: "center",
  justifyItems: "start",
};

const usernameStyling = {
  marginLeft: { xs: "7rem", sm: "1rem", md: "3rem", lg: "4rem" },
  gridRow: { xs: "1", sm: "1" },
};

const usernameTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "2" },
  gridRow: { xs: "2", sm: "1" },
  marginRight: "1rem",
  marginLeft: { xs: "3rem", sm: "1rem", md: "1rem", lg: "1rem" },
};

const passwordStyling = {
  marginLeft: {
    xs: "7rem",
    sm: "1.5rem",
    md: "3.5rem",
    lg: "4.5rem",
  },
  marginBottom: { xs: "0rem", sm: "1rem", md: "1rem", lg: "1rem" },
  gridRow: { xs: "3", sm: "2" },
};

const passwordTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "2" },
  gridRow: { xs: "4", sm: "2" },
  marginRight: "1rem",
  marginBottom: "1rem",
  marginLeft: { xs: "3rem", sm: "1rem", md: "1rem", lg: "1rem" },
};
