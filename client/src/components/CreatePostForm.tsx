import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { theme } from "../theme";
import TextButton from "./TextButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
});

interface Props {
  onSubmit: (values: { title: string; content: string }) => void;
}

export default function CreatePostForm({ onSubmit }: Props) {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={formContainer}>
        <Typography variant="h2">Create a new post</Typography>
        <Box sx={formBackground}>
          <Box sx={inputRow}>
            <InputLabel htmlFor="title">Title</InputLabel>
            <TextField
              sx={textField}
              fullWidth
              margin="normal"
              variant="outlined"
              id="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.title && formik.touched.title)}
            />
          </Box>
          <Box sx={inputRow}>
            <InputLabel htmlFor="content">Content</InputLabel>
            <TextField
              sx={textField}
              fullWidth
              margin="normal"
              variant="outlined"
              id="content"
              name="content"
              multiline
              rows={3}
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.content && formik.touched.content)}
            />
          </Box>
          <Box sx={buttonContainer}>
            <TextButton mode="dark">Post</TextButton>
          </Box>
        </Box>
      </Box>
    </form>
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

const formBackground = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  backgroundColor: theme.palette.secondary.main,
  padding: "1rem 2rem",
  borderRadius: "35px",
  margin: "1rem",
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
