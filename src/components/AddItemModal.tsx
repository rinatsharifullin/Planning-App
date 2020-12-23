import {
  Fab,
  Modal,
  Backdrop,
  Fade,
  Card,
  CardContent,
  TextField,
  CardActions,
  ButtonGroup,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

export const AddItemModal = ({
  open,
  handleClose,
  text,
  handleChangeText,
  handleChangeDate,
  date,
  handleCloseOkGen,
  handleOpenChild,
  edit,
  id,
}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      root: {
        "& > *": {
          margin: theme.spacing(0, 1, 2, 1),
          width: "25ch",
        },
      },
      container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    })
  );

  const classes = useStyles();

  if (open === undefined) open = false;

  return (
    <div>
      <Fab
        size="small"
        color={"primary"}
        aria-label="edit"
        onClick={() => handleOpenChild(id, edit)}
      >
        {edit ? <EditIcon /> : <AddIcon />}
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* Card in Modal----------------------- */}
          <Card>
            <CardContent>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Description"
                  multiline
                  value={text}
                  onChange={handleChangeText}
                  autoFocus
                />
              </form>
              <form className={classes.container} noValidate>
                <TextField
                  onChange={handleChangeDate}
                  id="date"
                  label="Select Date and Time"
                  type="date"
                  defaultValue={date}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </CardContent>
            <CardActions>
              <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Button onClick={handleCloseOkGen}>OK</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
          {/* Card in Modal----------------------- */}
        </Fade>
      </Modal>
    </div>
  );
};
