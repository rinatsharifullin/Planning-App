import {
  Backdrop,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Fab,
  Fade,
  FormControlLabel,
  makeStyles,
  Modal,
  Switch,
  TextField,
  Theme,
  Tooltip,
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { ThunkDispatch } from "redux-thunk";
import * as action from "../../../actions/actions";
import * as service from "../../../actions/services";
import { connect } from "react-redux";
import { store } from "../../..";
import { CardType } from "../../PlanningApp";

const ModalCard = ({ setCard, changeTeam, getTodoList }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    })
  );

  const classes = useStyles();

  const handleOpen = () => {
    var nowDate = new Date().toISOString().slice(0, 10);
    setOpen(true);
    setDate(nowDate);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleCloseOk = () => {
    var SingleCard = {
      id: Date.now().toString(),
      description: (store.getState().team ? "GT-" : "BT-") + text,
      status: "todo",
      dueDate: date.toString(),
    };

    if (text) {
      setCard(SingleCard);
      service.setTodo(SingleCard);
      setOpen(false);
      setText("");
      setDate("");
    }
  };
  const handleChange = (event) => {
    changeTeam(event.target.checked);
    getTodoList();
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Tooltip title="Add" placement="right">
        <Fab
          size="small"
          color={"primary"}
          aria-label="edit"
          onClick={() => handleOpen()}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
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
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Description"
                  multiline
                  value={text}
                  onChange={handleChangeText}
                  autoFocus
                />

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
                <Button onClick={handleCloseOk}>OK</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
          {/* Card in Modal----------------------- */}
        </Fade>
      </Modal>
      <Tooltip title="Teams" placement="left">
        <FormControlLabel
          value="team"
          onChange={handleChange}
          control={<Switch color="primary" />}
          label="BT  GT"
          labelPlacement="top"
        />
      </Tooltip>
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    setCard: (Card: CardType) => dispatch(action.SetCard(Card)),
    changeTeam: (event: boolean) => dispatch(action.ChangeTeam(event)),
    getTodoList: () => dispatch(action.GetTodoList()),
  };
};

export default connect(null, mapDispatchToProps)(ModalCard);
