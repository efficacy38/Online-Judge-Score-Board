import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { create_user } from "../api/server";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateUser = () => {
    create_user({uid: userId});
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        add coder
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">新增用戶</DialogTitle>
        <DialogContent>
          <DialogContentText>
            請輸入 uva online judge 帳號已完成新增用戶，新增用戶需要時間新增用戶
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="user name"
            type="text"
            fullWidth
            value={userId}
            onChange={(e) => {setUserId(e.currentTarget.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleCreateUser();
              handleClose();
            }}
            color="primary"
          >
            註冊
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
