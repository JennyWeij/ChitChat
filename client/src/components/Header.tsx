import { AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginLogoutButton from "./LoginLogoutButton";
import TextButton from "./TextButton";

export default function Header() {
  const { isAdmin } = useAuth();

  return (
    <AppBar sx={headerBoxStyling}>
      <Box sx={buttonWrapperStyling}></Box>
      <Link to="/" style={linkStyle}>
        <Typography variant="h1" sx={logoStyling}>
          ChitChat
        </Typography>
      </Link>
      <Box sx={buttonWrapperStyling}>
        {isAdmin && (
          <TextButton to="/admincontrolpage" mode="light">
            Admin
          </TextButton>
        )}
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
  position: "absolute",
};

const logoStyling = {
  fontFamily: "Montserrat",
};

const buttonWrapperStyling = {
  width: "200px",
  display: "flex",
  gap: "10px",
  justifyContent: "flex-end",
};

const linkStyle = {
  textDecoration: "none",
};
