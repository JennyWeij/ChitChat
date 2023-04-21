import { Box } from "@mui/material";
import { useEffect } from "react";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom, #DCEFD3, #FFFFFF)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <Box>
      <SignupForm />
    </Box>
  );
}
