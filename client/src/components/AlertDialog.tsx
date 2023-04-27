import { ThemeProvider } from "@emotion/react";
import { DeleteOutline } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { usePosts } from "../contexts/PostsContext";
import { theme, themeAdmin } from "../theme";

interface Post {
  id: string;
}

export default function AlertDialog(props: Post) {
  const [open, setOpen] = React.useState(false);
  const { posts, fetchPosts } = usePosts();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async ({ id }: Post) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        fetchPosts();
        handleClose();
      } else {
        throw new Error("Failed to delete post");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ThemeProvider theme={themeAdmin}>
      <div>
        <DeleteOutline sx={deleteIcon} onClick={handleClickOpen} />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to delete this post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={buttonTextCancel}>
              Cancel
            </Button>
            <Button onClick={() => handleDelete(props)} sx={buttonText}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

const buttonText = {
  color: "#F95858",
};
const buttonTextCancel = {
  color: theme.palette.darktext.main,
};

const deleteIcon = {
  "&:hover": {
    color: "#F95858",

    boxShadow: "none",
  },
};
