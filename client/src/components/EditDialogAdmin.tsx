import { EditNote } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { usePosts } from "../contexts/PostsContext";
import CreatePostForm from "./CreatePostForm";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface EditDialogAdminProps {
  postId: string;
  currentTitle: string;
  currentContent: string;
  currentPost: {
    _id: string;
    author: string;
    content: string;
    createdAt: string;
    title: string;
  };
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function EditDialogAdmin({
  postId,
  currentTitle,
  currentContent,
}: EditDialogAdminProps) {
  const [open, setOpen] = useState(false);
  const { posts, fetchPosts, updatePost } = usePosts();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: { title: string; content: string }) => {
    const post = posts.find((p) => p._id === postId);
    console.log(post);
    if (post) {
      await updatePost(postId, post.author, values.title, values.content, post.createdAt);
    }
    handleClose();
    fetchPosts();
  };

  return (
    <div>
      <EditNote sx={editIcon} onClick={handleClickOpen} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialogContent-root": {
            width: "25rem",
          },
          "@media (max-width: 550px)": {
            "& .MuiDialogContent-root": {
              width: "15rem",
            },
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Edit post
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <CreatePostForm
            onSubmit={handleSubmit}
            post={{
              _id: postId,
              title: currentTitle,
              content: currentContent,
            }}
            isEditing={true}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const editIcon = {
  "&:hover": {
    color: "white",
    boxShadow: "none",
  },
};
