import { Box } from "@mui/material";
import { theme } from "../theme";
import AlertDialog from "./AlertDialog";
import EditDialogAdmin from "./EditDialogAdmin";

export default function EditDeleteButtons() {
    return (
        <Box sx={editDelete}>
          <EditDialogAdmin />
          <AlertDialog />
        </Box>
    );
};

const editDelete = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "0.4rem",
    gap: "1rem",
    marginTop: "1.5rem",
    color: theme.palette.darktext.main,
  };