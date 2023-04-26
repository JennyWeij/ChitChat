import { Box, Button, useTheme } from "@mui/material";
import { usePostEdit } from "../contexts/PostEditContext";
import AlertDialog from "./AlertDialog";
import EditDialogAdmin from "./EditDialogAdmin";

interface Props {
  id: string;
}

export default function EditDeleteButtons({ id }: Props) {
  const theme = useTheme();
  const { setPostIdToEdit } = usePostEdit();

  const handleEditClick = () => {
    setPostIdToEdit(id);
  };

  return (
    <Box sx={{ ...editDelete, color: theme.palette.darktext.main }}>
      <Button onClick={handleEditClick}>
      <EditDialogAdmin/>
      </Button>
      <AlertDialog {...{ id }} />
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
