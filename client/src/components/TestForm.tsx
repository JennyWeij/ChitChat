import { Box, Button, TextField, Typography } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from 'yup';

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

export default function TestForm() {
    const handleSubmit = async (values: FormValues) => {
        console.log('Form data:', values);
        await register(values.username, values.password);
      };

      async function register(username: string, password: string) {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
      
        const data = await response.json();
        if (response.ok) {
          console.log('User registered:', data);
        } else {
          console.error('Registration error:', data.message);
        }
      }

    return (
        <Box>
      <Typography variant="h4">Create Account</Typography>
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
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

