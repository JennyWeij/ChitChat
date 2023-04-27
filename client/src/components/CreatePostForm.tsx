import { Box, Button, InputLabel, TextField } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import { theme } from "../theme";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
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
  return (
    <Formik
      initialValues={{
        title: isEditing && post ? post.title : "",
        content: isEditing && post ? post.content : "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={formContainer}>
            <Box sx={inputRow}>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Field name="title">
                {({ field }: FieldProps) => (
                  <TextField
                    sx={textField}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    {...field}
                    error={touched.title && !!errors.title}
                  />
                )}
              </Field>
            </Box>
            <Box sx={inputRow}>
              <InputLabel htmlFor="content">Content</InputLabel>
              <Field name="content">
                {({ field }: FieldProps) => (
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
                )}
              </Field>
            </Box>
            <Box sx={buttonContainer}>
              <Button type="submit" sx={styledButtonDark}>
                Post
              </Button>
            </Box>
          </Box>
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
