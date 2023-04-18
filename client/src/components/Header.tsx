import { AppBar, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import LoginLogoutButton from "./LoginLogoutButton";

export default function Header() {
  const { login, logout, isLoggedIn } = useAuth();

  return (
    <AppBar sx={headerBoxStyling}>
      <Typography
        variant="h1"
        sx={logoStyling}
      >
        ChitChat
      </Typography>
      <LoginLogoutButton />
    </AppBar>
  );
}

const headerBoxStyling = {
  height: "100px",
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
};

const logoStyling = {
  fontFamily: "Montserrat",
};
