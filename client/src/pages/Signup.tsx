import { Box, TextField, Typography } from "@mui/material";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function SignupPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Register new user</Typography>
        <Box
          sx={{
            width: "30rem",
            height: "13rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "35px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <TextField
            id="outlined-basic"
            // label="Username"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              marginTop: "2rem",
              marginBottom: "2rem",
              marginRight: "1.5rem",
            }}
          />
          <TextField
            id="outlined-basic"
            // label="Password"
            variant="outlined"
            sx={{ backgroundColor: "white", marginRight: "1.5rem" }}
          />
        </Box>
        <TextButton mode="light">Register</TextButton>
      </Box>
    </Box>
  );
}
