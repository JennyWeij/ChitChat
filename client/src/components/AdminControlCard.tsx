import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
import { theme, themeAdmin } from "../theme";

interface Props {
  name: string;
  role: string;
}

export default function AdminControlCard({ name, role }: Props) {
  return (
    <Box sx={panelContainer}>
      <Box sx={panel}>
        <Box display="flex" flexDirection="row" alignItems="center">
          {role === "admin" ? (
            <AdminPanelSettingsIcon color="info" fontSize="large" />
          ) : role === "user" ? (
            <PersonIcon color="info" fontSize="large" />
          ) : null}
          <Typography sx={{ color: theme.palette.black.main }}>
            {name}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" borderRadius="1rem">
          {role === "admin" ? (
            <ArrowCircleDownIcon color="info" fontSize="large" />
          ) : role === "user" ? (
            <ArrowCircleUpIcon color="info" fontSize="large" />
          ) : null}
          <ClearIcon color="info" fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
}

const panelContainer = {
  border: "0.5rem solid white",
  backgroundColor: "white",
  borderRadius: "1rem",
  m: "1rem",
  display: "flex",
  flexDirection: "row",
};

const panel = {
  backgroundColor: themeAdmin.palette.lightgrey.main,
  display: "flex",
  justifyContent: "space-between",
  p: "0.5rem",
  borderRadius: "0.5rem",
  width: { xs: "20rem", sm: "30rem" },
};
