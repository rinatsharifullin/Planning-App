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
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";

export const ModalAdd = ({ ChildCard }) => {
  var nowDate = new Date().toISOString().slice(0, 10);
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = useState(nowDate);
  const [text, setText] = useState("");
  // const [Cards, setCards] = useState(ParentCards);
  type singleCard = {
    id: number;
    description: string;
    status: string;
    dueDate: string;
  };
  var SingleCard: singleCard;
  const handleOpen = () => {
    setOpen(true);
    setDate(nowDate);
  };

  const handleClose = () => {
    setText("");
    setOpen(false);
  };
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const todosApi = axios.create({
    baseURL: "http://52.213.105.232:3500/main/",
  });

  async function setTodo(todo) {
    try {
      await todosApi.post("/setTodo", todo);
    } catch (e) {
      console.log(e);
    }
  }
  const handleCloseOk = () => {
    SingleCard = {
      id: Date.now(),
      description: text,
      status: "todo",
      dueDate: date,
    };
    setTodo(SingleCard);
    ChildCard(SingleCard);
    setText("");

    setDate("");
    setOpen(false);
  };
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
  return (
    <div>
      <Fab
        size="small"
        color={"primary"}
        aria-label="edit"
        onClick={handleOpen}
      >
        <AddIcon />
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
                <Button onClick={handleCloseOk}>OK</Button>
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
