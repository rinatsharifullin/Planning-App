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
  makeStyles,
  Modal,
  TextField,
  Theme,
  Tooltip,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as action from "../../../actions/actions";
import * as service from "../../../actions/services";
import { store } from "../../..";
import { CardType } from "../../PlanningApp";
import { AppState } from "../../../reducer/reducer";

const ModalEdit = ({ id, Cards, setCards }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [statusEdit, setStatusEdit] = useState("");

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

  var CardsEdit = JSON.parse(JSON.stringify(Cards));
  const handleOpenEdit = () => {
    for (const x of CardsEdit) {
      if (x.id === id) {
        setText(x.description);
        setDate(x.dueDate.slice(0, 10));
        setStatusEdit(x.status);
        setOpenEdit(true);
        break;
      }
    }
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleCloseOkEdit = () => {
    for (const x in CardsEdit) {
      if (CardsEdit[x].id === id) {
        CardsEdit[x].description = text;
        CardsEdit[x].dueDate = date;
        break;
      }
    }
    var SingleCard = {
      id: id,
      description: text,
      status: statusEdit,
      dueDate: date,
    };
    if (text) {
      setCards(CardsEdit);
      service.updateTodo(SingleCard);
    }
    setText("");
    setDate("");
    setOpenEdit(false);
  };
  const handleCloseEdit = () => {
    setText("");
    setOpenEdit(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Tooltip title="Edit" placement="top">
        <Fab
          size="small"
          color={"primary"}
          aria-label="edit"
          onClick={() => handleOpenEdit()}
        >
          <EditIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openEdit || false}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEdit}>
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
                <Button onClick={handleCloseOkEdit}>OK</Button>
                <Button onClick={() => handleCloseEdit()}>Cancel</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
          {/* Card in Modal----------------------- */}
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    Cards: state.Cards,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    setCards: (CardsEdit: CardType[]) => dispatch(action.SetCards(CardsEdit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
