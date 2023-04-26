import { EditNote } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { usePostEdit } from "../contexts/PostEditContext";
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

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, p: 2 }}
      {...other}
    >
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

export default function EditDialogAdmin() {
  const [open, setOpen] = useState(false);
  const [requestedOpen, setRequestedOpen] = useState(false);
  const { postIdToEdit, fetchPost, post, loading, updatePost } = usePostEdit();

  const handleClickOpen = () => {
    if (post && !loading) {
      setOpen(true);
    } else {
      setRequestedOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setRequestedOpen(false);
  };

  useEffect(() => {
    if (postIdToEdit) {
      fetchPost(postIdToEdit);
    }
  }, [postIdToEdit, fetchPost]);

  useEffect(() => {
    if (requestedOpen && postIdToEdit && !loading && post) {
      setOpen(true);
    }
  }, [requestedOpen, postIdToEdit, loading, post]);

  const handleSubmit = async (values: { title: string; content: string }) => {
    if (postIdToEdit) {
      await updatePost(postIdToEdit, values.title, values.content);
      handleClose();
    }
  };

  return (
    <div>
      <EditNote
        sx={editIcon}
        onClick={handleClickOpen}
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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
            post={post}
            isEditing={true}
          />
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
        </DialogActions>
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
