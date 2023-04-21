import { Box } from "@mui/material";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom, #DCEFD3, #FFFFFF)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <Box>
      <LoginForm />
    </Box>
  );
}
