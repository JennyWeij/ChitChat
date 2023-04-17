import { Box, Typography } from "@mui/material";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function SignupPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography marginTop="5rem" variant="h2">
          Register new user
        </Typography>
        <Box
          sx={{
            width: "30rem",
            height: "12rem",
            marginTop: "3rem",
            marginBottom: "2rem",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "35px",
            textAlign: "center",
          }}
        ></Box>
        <TextButton mode="light">Register</TextButton>
      </Box>
    </Box>
  );
}
