import {
    Box,
    FormControl,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { theme } from "../theme";
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
        <InputLabel htmlFor="content">
          <Typography variant="h2">Create a new post</Typography>
        </InputLabel>
        <Box sx={formBackground}>
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
              multiline
              rows={3}
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //helperText={formik.touched.content && formik.errors.content}
              error={Boolean(formik.errors.content && formik.touched.content)}
            />
          </FormControl>
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
  //gap: "2rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "1rem 2rem",
  borderRadius: "35px",
  margin: "1rem"
};
