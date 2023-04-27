import { Box, Button, InputLabel, Snackbar, TextField } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { theme } from "../theme";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string()
    .required("Content is required")
    .max(200, "Max 200 characters allowed"),
});

interface Props {
  onSubmit: (values: { title: string; content: string }) => void;
  post?: {
    _id: string;
    title: string;
    content: string;
  };
  isEditing: boolean;
}

export default function CreatePostForm({ onSubmit, post, isEditing }: Props) {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <Formik
      initialValues={{
        title: isEditing && post ? post.title : "",
        content: isEditing && post ? post.content : "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
        setShowSnackbar(true);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={formContainer}>
            <Box sx={inputRow}>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Field name="title">
                {({ field }: FieldProps) => (
                  <div>
                    <TextField
                      sx={textField}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      {...field}
                      error={touched.title && !!errors.title}
                    />
                    {touched.title && errors.title && (
                      <div style={{ color: "red" }}>{errors.title}</div>
                    )}
                  </div>
                )}
              </Field>
            </Box>
            <Box sx={inputRow}>
              <InputLabel htmlFor="content">Content</InputLabel>
              <Field name="content">
                {({ field }: FieldProps) => (
                  <div>
                    <TextField
                      sx={textField}
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      multiline
                      rows={3}
                      {...field}
                      error={touched.content && !!errors.content}
                    />
                    {touched.content && errors.content && (
                      <div style={{ color: "red" }}>
                        {errors.content.length === 200
                          ? "Max 200 characters allowed"
                          : errors.content}
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </Box>
            <Box sx={buttonContainer}>
              <Button type="submit" sx={styledButtonDark}>
                Post
              </Button>
            </Box>
          </Box>
          <Snackbar
            open={showSnackbar}
            onClose={handleSnackbarClose}
            message="You posted a new post!"
            autoHideDuration={3000}
          />
        </Form>
      )}
    </Formik>
  );
}

const formContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "2rem",
};

const buttonContainer = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
};

const inputRow = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "1rem",
};

const textField = {
  marginLeft: 0,
  marginTop: 0,
};

const styledButtonDark = {
  borderStyle: "solid",
  borderRadius: "20px",
  borderWidth: "1px",
  borderColor: theme.palette.darktext.main,
  paddingTop: "0.2rem",
  paddingBottom: "0.2rem",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.darktext.main,
  "&:hover": {
    color: theme.palette.darktext.main,
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
  },
};
