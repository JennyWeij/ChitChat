import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
import { theme } from "../theme";

export default function AdminControlPanel() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Box display="flex" justifyContent="center" marginBottom="3rem">
        <Typography variant="h2" fontWeight="bold">
          Admin
        </Typography>
      </Box>

      {/* Admin user */}
      <Box sx={panelContainer}>
        <Box sx={panel}>
          <Box display="flex" flexDirection="row" alignItems="center">
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
      </Box>

      {/* reguler user */}
      <Box sx={panelContainer}>
        <Box sx={panel}>
          <Box display="flex" flexDirection="row" alignItems="center">
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
    </Box>
  );
}

const panelContainer = {
  border: "1rem solid white",
  backgroundColor: "white",
  borderRadius: "1rem",
  m: "1rem",
  display: "flex",
  flexDirection: "row",
  width: "30rem",
};

const panel = {
  backgroundColor: theme.palette.lightgrey.main,
  display: "flex",
  justifyContent: "space-between",
  p: "0.5rem",
  borderRadius: "0.5rem",
  width: "30rem",
};
