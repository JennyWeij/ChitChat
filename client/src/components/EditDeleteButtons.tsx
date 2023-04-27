import { Box, Button, useTheme } from "@mui/material";
import AlertDialog from "./AlertDialog";
import EditDialogAdmin from "./EditDialogAdmin";

interface Props {
  id: string;
  title: string;
  content: string;
}

export default function EditDeleteButtons({ id, title, content }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...editDelete,
        color: theme.palette.darktext.main,
      }}
    >
      <Button>
        <EditDialogAdmin
          postId={id}
          currentTitle={title}
          currentContent={content}
          currentPost={{
            _id: "",
            author: "",
            content: "",
            createdAt: "",
            title: "",
          }}
        />
      </Button>
      <AlertDialog {...{ id }} />
    </Box>
  );
}

const editDelete = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  flexDirection: "row",
  marginLeft: "0.4rem",
  gap: "1rem",
  marginTop: "1.5rem",
  "@media (max-width: 600px)": {
    flexDirection: "row",
    marginTop: "0.5rem",
  },
};
