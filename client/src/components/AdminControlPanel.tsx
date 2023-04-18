import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
import { theme } from "../theme";

export default function AdminControlPanel() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Box display="flex" justifyContent="center" marginBottom="2rem">
        <Typography variant="h2" fontWeight="bold">
          Admin
        </Typography>
      </Box>

      {/* Admin user */}
      <Box sx={panelContainer}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          borderRadius="1rem"
        >
          <AdminPanelSettingsIcon color="info" fontSize="large" />
          <Typography sx={{ color: theme.palette.black.main }}>
            OtherAdmin
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" borderRadius="1rem">
          <ArrowCircleUpIcon color="info" fontSize="large" />
          <ClearIcon color="info" fontSize="large" />
        </Box>
      </Box>

      {/* reguler user */}
      <Box sx={panelContainer}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          borderRadius="1rem"
        >
          <PersonIcon color="info" fontSize="large" />
          <Typography sx={{ color: theme.palette.black.main }}>
            Simon
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" borderRadius="1rem">
          <ArrowCircleUpIcon color="info" fontSize="large" />
          <ClearIcon color="info" fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
}

const panelContainer = {
  backgroundColor: theme.palette.lightgrey.main,
  border: "1rem solid",
  color: "white",
  borderRadius: "1rem",
  m: "1rem",
  p: "0.5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "20rem",
};
