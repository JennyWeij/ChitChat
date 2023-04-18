import { Box } from "@mui/material";
import PublicStartPage from "../components/PublicStart";
import UserStartPage from "../components/UserStart";
import { useAuth } from "../contexts/AuthContext";

export default function StartPage() {
  const { isLoggedIn } = useAuth();
  
  return (
    <Box>
      {isLoggedIn ? <UserStartPage /> : <PublicStartPage />}
    </Box>
  );
}

