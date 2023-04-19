import { Box, useTheme } from "@mui/material";
import AlertDialog from "./AlertDialog";
import EditDialogAdmin from "./EditDialogAdmin";

export default function EditDeleteButtons() {
  const theme = useTheme();

  return (
    <Box sx={{ ...editDelete, color: theme.palette.darktext.main }}>
      <EditDialogAdmin />
      <AlertDialog />
    </Box>
  );
}

const editDelete = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginLeft: "0.4rem",
  gap: "1rem",
  marginTop: "1.5rem",
  "@media (max-width: 600px)": {
    flexDirection: "row",
    marginTop: "0.5rem",
  },
};