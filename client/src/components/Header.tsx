import { AppBar, Box, Typography } from "@mui/material";
import LoginLogoutButton from "./LoginLogoutButton";

export default function Header() {

  return (
    <AppBar sx={headerBoxStyling}>
      <Box sx={buttonWrapperStyling}></Box>
      <Typography
        variant="h1"
        sx={logoStyling}
      >
        ChitChat
      </Typography>
      <Box sx={buttonWrapperStyling}>
      <LoginLogoutButton />
      </Box>
    </AppBar>
  );
}

const headerBoxStyling = {
  display: "flex",
  flexDirection: "row",
  height: "100px",
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2rem",
};

const logoStyling = {
  fontFamily: "Montserrat",
};

const buttonWrapperStyling = {
  width: "95px",
}
