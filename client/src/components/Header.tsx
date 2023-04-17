import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar sx={headerBoxStyling}>
      {/* <TextButton>Header button!</TextButton> */}
      <Typography variant="h1" sx={logoStyling}>ChitChat</Typography>
    </AppBar>
  );
}

const headerBoxStyling = {
  height: "100px",
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
}

const logoStyling = {
  fontFamily: "Montserrat",
}