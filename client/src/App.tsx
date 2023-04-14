import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Outlet />
        <Typography>Hello from App.tsx</Typography>
      </Box>
    </ThemeProvider>
  );
}
