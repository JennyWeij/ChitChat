import { Box, TextField, Typography } from "@mui/material";
import TestFormLogin from "../components/TestFormLogin";
import TextButton from "../components/TextButton";
import { theme } from "../theme";

export default function LoginPage() {
  return (
    <Box sx={boxPosition}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Sign in</Typography>
        <Box sx={loginBox}>
          <Typography variant="h4" gridColumn="1" sx={usernameStyling}>
            Username
          </Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={usernameTextField}
          />

          <Typography variant="h4" gridColumn="1" sx={passwordStyling}>
            Password
          </Typography>

          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={passwordTextField}
          />
        </Box>

        <TextButton mode="light">Log in</TextButton>
      </Box>

      {/* Jenny testformulär */}
      <TestFormLogin />
    </Box>
  );
}

const boxPosition = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
};

const loginBox = {
  width: { xs: "20rem", sm: "25rem", md: "27rem", lg: "32rem" },
  height: "13rem",
  marginTop: "2rem",
  marginBottom: "2.5rem",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "35px",
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: { xs: "repeat(4, 1fr)", sm: "repeat(2, 1fr)" },
  gap: "0.2rem",
  alignItems: "center",
  justifyItems: "start",
};

const usernameStyling = {
  marginLeft: { xs: "7rem", sm: "1rem", md: "3rem", lg: "4rem" },
  gridRow: { xs: "1", sm: "1" },
};

const usernameTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "2" },
  gridRow: { xs: "2", sm: "1" },
  marginRight: "1rem",
  marginLeft: { xs: "3rem", sm: "1rem", md: "1rem", lg: "1rem" },
};

const passwordStyling = {
  marginLeft: {
    xs: "7rem",
    sm: "1.5rem",
    md: "3.5rem",
    lg: "4.5rem",
  },
  marginBottom: { xs: "0rem", sm: "1rem", md: "1rem", lg: "1rem" },
  gridRow: { xs: "3", sm: "2" },
};

const passwordTextField = {
  backgroundColor: theme.palette.white.main,
  gridColumn: { xs: "1", sm: "2" },
  gridRow: { xs: "4", sm: "2" },
  marginRight: "1rem",
  marginBottom: "1rem",
  marginLeft: { xs: "3rem", sm: "1rem", md: "1rem", lg: "1rem" },
};
