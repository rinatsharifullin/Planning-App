import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextFieldsChildOfDateTimePicker from "./TextFieldsChildOfDateTimePicker";
import DateTimePickerChildOfAddEditDialog from "./DateTimePickerChildOfAddEditDialog";
import EditIcon from "@material-ui/icons/Edit";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
// addCard function sent to parent textValue and dateValue to reproduce on single card
// addNew var receive from parent true or false (edit or create new card)
export default function AddEditDialog({ addCard, addNew }) {
  const [open, setOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState("");
  const [dateValue, setDateValue] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    addCard(textValue, dateValue);
    setTextValue(""); //Prevent same text if create empty card
    setOpen(false);
  };

  return (
    <div>
      <Fab
        size="small"
        color={addNew ? "default" : "primary"}
        aria-label="edit"
        onClick={handleClickOpen}
      >
        {addNew ? <AddIcon /> : <EditIcon />}
      </Fab>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {addNew ? "Add" : "Edit"}
        </DialogTitle>
        <DialogContent dividers>
          <TextFieldsChildOfDateTimePicker
            textValue={(value) => setTextValue(value)}
          />
          <DateTimePickerChildOfAddEditDialog
            dateValue={(value) => setDateValue(value)}
          />
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={handleClick} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
