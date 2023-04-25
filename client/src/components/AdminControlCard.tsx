import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Button, Typography } from "@mui/material";
import { theme, themeAdmin } from "../theme";

interface Props {
  name: string;
  isAdmin: boolean;
  userId: string;
  promoteUser: (userId: string) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
}

export default function AdminControlCard({
  name,
  isAdmin,
  userId,
  promoteUser,
  deleteUser,
}: Props) {
  return (
    <Box sx={panelContainer}>
      <Box sx={panel}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          {isAdmin ? (
            <AdminPanelSettingsIcon
              color="info"
              fontSize="large"
            />
          ) : (
            <PersonIcon
              color="info"
              fontSize="large"
            />
          )}
          <Typography sx={{ color: theme.palette.black.main }}>
            {name}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          borderRadius="1rem"
        >
            {isAdmin ? null : (
          <Button>
              <ArrowCircleUpIcon
                color="info"
                fontSize="large"
                onClick={() => promoteUser(userId)}
              />
          </Button>
            )}
          <Button>
            <ClearIcon
              color="info"
              fontSize="large"
              onClick={() => deleteUser(userId)}
            />
          </Button>
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


