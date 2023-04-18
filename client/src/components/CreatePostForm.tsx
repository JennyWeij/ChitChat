import {
    Box,
    FormControl,
    InputLabel,
    TextField
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextButton from "./TextButton";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Required"),
});

interface Props {
  onSubmit: (values: { content: string }) => void;
}

export default function CreatePostForm({ onSubmit }: Props) {
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={formContainer}>
        <InputLabel htmlFor="content">Create a new post</InputLabel>
        <FormControl
          fullWidth
          error={Boolean(formik.errors.content && formik.touched.content)}
        >
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            id="content"
            name="content"
            label="Message"
            multiline
            rows={3}
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.content && formik.errors.content}
            error={Boolean(formik.errors.content && formik.touched.content)}
          />
        </FormControl>
      </Box>
      <Box sx={buttonContainer}>
      <TextButton mode="dark">Post</TextButton>
      </Box>
    </form>
  );
}

const formContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const buttonContainer = {
    display: "flex",
    justifyContent: "flex-end"
}