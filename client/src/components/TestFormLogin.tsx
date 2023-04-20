import { Box, Button, TextField, Typography } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from "../contexts/AuthContext";

interface FormValues {
    username: string;
    password: string;
  }
  
  const initialValues: FormValues = {
    username: '',
    password: '',
  };
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

export default function TestFormLogin() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (values: FormValues) => {
        console.log('Form data:', values);
        const success = await login(values.username, values.password);
        if (success) {
            navigate('/');
        }
      };
      
    return (
        <Box>
      <Typography variant="h4">Log In</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box>
              <Field name="username">
                {({ field }: FieldProps) => (
                  <TextField
                    {...field}
                    label="Username"
                    variant="outlined"
                    error={touched.username && !!errors.username}
                    helperText={touched.username ? errors.username : ''}
                  />
                )}
              </Field>
            </Box>
            <Box>
              <Field name="password">
                {({ field }: FieldProps) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    error={touched.password && !!errors.password}
                    helperText={touched.password ? errors.password : ''}
                  />
                )}
              </Field>
            </Box>
            <Box>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
