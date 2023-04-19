import { Box } from "@mui/material";
import PublicStartPage from "../components/PublicStartPage";
import UserStartPage from "../components/UserStartPage";
import { useAuth } from "../contexts/AuthContext";

export default function StartPage() {
  const { isLoggedIn } = useAuth();
  
  return (
    <Box>
      {isLoggedIn ? <UserStartPage /> : <PublicStartPage />}
    </Box>
  );
}

