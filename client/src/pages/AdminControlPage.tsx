import { Box } from "@mui/material";
import { useEffect } from "react";
import AdminControlPanel from "../components/AdminControlPanel";

export default function AdminControlPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom, #E1EEFA, #FFFFFF)";

    return () => {
      document.body.style.background = "";
    };
  }, []);
  return (
    <Box>
      <AdminControlPanel />
    </Box>
  );
}
