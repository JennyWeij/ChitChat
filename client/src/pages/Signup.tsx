import { Box, TextField, Typography } from "@mui/material";
import TestForm from "../components/TestForm";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function SignupPage() {
  return (
    <Box sx={boxPosition}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Register new user</Typography>

        <Box sx={formBox}>
          <Typography variant="h4" gridColumn="1" sx={usernameStyling}>
            Create username
          </Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={usernameTextField}
          />

          <Typography variant="h4" gridColumn="1" sx={passwordStyling}>
            Create password
          </Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={passwordTextField}
          />
        </Box>

        <TextButton mode="light">Register</TextButton>
      </Box>

      {/* Jenny testform */}
      <TestForm />
    </Box>
  );
}

const boxPosition = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
};

const formBox = {
  width: { xs: "20rem", sm: "25rem", md: "30rem", lg: "32rem" },
  height: "13rem",
  marginTop: "2rem",
  marginBottom: "2.5rem",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "35px",
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: {
    xs: "repeat(4, 1fr)",
    sm: "repeat(4, 1fr)",
    md: "repeat(2, 1fr)",
  },
  gap: "0.2rem",
  alignItems: "center",
  justifyItems: "start",
};

const usernameStyling = {
  marginLeft: {
    xs: "4.5rem",
    sm: "7rem",
    md: "1.5rem",
    lg: "3rem",
  },
  marginTop: {
    xs: "0rem",
    sm: "0rem",
    md: "2rem",
    lg: "2rem",
  },
  gridRow: { xs: "1", sm: "1" },
};

const usernameTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "1", md: "2" },
  gridRow: { xs: "2", sm: "2", md: "1" },
  marginRight: "1rem",
  marginTop: {
    xs: "0rem",
    sm: "0rem",
    md: "2rem",
    lg: "2rem",
  },
  marginLeft: {
    xs: "3rem",
    sm: "5.5rem",
    md: "1.5rem",
    lg: "0.5rem",
  },
};

const passwordStyling = {
  marginLeft: {
    xs: "4.5rem",
    sm: "7rem",
    md: "1.5rem",
    lg: "3rem",
  },
  gridRow: { xs: "3", sm: "3" },
  marginBottom: { xs: "0rem", sm: "0rem", md: "2rem", lg: "2rem" },
};

const passwordTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "1", md: "2" },
  gridRow: { xs: "4", sm: "4", md: "3" },
  marginRight: "1rem",
  marginBottom: { xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" },
  marginLeft: {
    xs: "3rem",
    sm: "5.5rem",
    md: "1.5rem",
    lg: "0.5rem",
  },
};
