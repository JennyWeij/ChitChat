import { Box, Typography } from "@mui/material";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function SignupPage() {
  return (
    <Box>
      <Typography variant="h2">Register new user</Typography>
      <Box
        sx={{
          width: "30rem",
          height: "12rem",
          marginTop: "5rem",
          marginBottom: "2rem",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "35px",
        }}
      ></Box>
      <TextButton mode="light">Register</TextButton>
    </Box>
  );
}
