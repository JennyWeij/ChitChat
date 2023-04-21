import { AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginLogoutButton from "./LoginLogoutButton";

export default function Header() {
  return (
    <AppBar sx={headerBoxStyling}>
      <Box sx={buttonWrapperStyling}></Box>
      <Link to="/" style={linkStyle}>
        <Typography variant="h1" sx={logoStyling}>
          ChitChat
        </Typography>
      </Link>
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
};

const linkStyle = {
  textDecoration: "none",
};
