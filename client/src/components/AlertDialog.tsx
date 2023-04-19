import { ThemeProvider } from "@emotion/react";
import { DeleteOutline } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { themeAdmin } from "../theme";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              Do you want to delete the post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button sx={buttonText} onClick={handleClose}>
              No
            </Button>
            <Button sx={buttonText} onClick={handleClose} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

const buttonText = {
  color: themeAdmin.palette.darktext.main,
};

const deleteIcon = {
  "&:hover": {
    color: "tomato",

    boxShadow: "none",
  },
};
