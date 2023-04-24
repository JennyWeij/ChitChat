import { Box } from "@mui/material";
import { useEffect } from "react";
import AdminStartPage from "../components/AdminStartPage";
import PublicStartPage from "../components/PublicStartPage";
import UserStartPage from "../components/UserStartPage";
import { useAuth } from "../contexts/AuthContext";

export default function StartPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom, #DCEFD3, #FFFFFF)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  const { isLoggedIn, isAdmin } = useAuth();

  return (
    <Box>
      {isLoggedIn ? (
        isAdmin ? (
          <AdminStartPage />
        ) : (
          <UserStartPage />
        )
      ) : (
        <PublicStartPage />
      )}
    </Box>
  );
}
