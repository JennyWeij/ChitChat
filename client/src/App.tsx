import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AuthProvider from "./contexts/AuthContext";
import { PostEditProvider } from "./contexts/PostEditContext";
import { PostsProvider } from "./contexts/PostsContext";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PostsProvider>
          <PostEditProvider>
          <Box sx={boxStyling}>
            <Header />
            <main style={mainStyling}>
              <Outlet />
            </main>
          </Box>
          </PostEditProvider>
        </PostsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

const boxStyling = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainStyling = {
  marginTop: "100px",
};
