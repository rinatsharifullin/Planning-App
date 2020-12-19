import {
  Backdrop,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Container,
  createStyles,
  Fab,
  Fade,
  FormLabel,
  Grid,
  makeStyles,
  Modal,
  Paper,
  RadioGroup,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import InputIcon from "@material-ui/icons/Input";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
export const AllInOneContainer = () => {
  var nowDate = new Date().toISOString().slice(0, -8);
  const [text, setText] = useState("");
  const [date, setDate] = useState(nowDate);
  const [open, setOpen] = React.useState(false);
  type singleCard = {
    id: number;
    description: string;
    status: string;
    dueDate: string;
  };
  var SingleCard = { id: 123, description: "", status: "", dueDate: "" };
  const [Cards, setCards] = useState([
    { id: 0, description: "", status: "", dueDate: "" },
  ]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setText("");
    setOpen(false);
  };
  const handleCloseOk = () => {
    SingleCard = {
      id: Date.now(),
      description: text,
      status: "new",
      dueDate: date.slice(0, -6) + " " + date.slice(11, 16),
    };
    console.log(Cards);
    if (text) setCards([...Cards, SingleCard]);
    setText("");
    setOpen(false);
  };

  //Style----------------------
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
  //Style----------------------

  //Text----------------------
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  //Text----------------------

  //Date----------------------

  //Date----------------------

  return (
    <Container maxWidth="md" component="main">
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
        Planning App
      </Typography>
      {/* //Modal---------------------- */}
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
                    id="datetime-local"
                    label="Select Date and Time"
                    type="datetime-local"
                    defaultValue={nowDate}
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
      {/* //Modal---------------------- */}
      <Grid container justify="center" spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={2}>
            <Box p={1}>
              <Typography variant="h5">New</Typography>
            </Box>
            {/* //Card------------------------ */}
            {Cards.map((item) => {
              if (item.description)
                return (
                  <Box
                    p={1}
                    key={item.id}
                    bgcolor={
                      item.status == "inProgress"
                        ? "success.main"
                        : item.status == "new"
                        ? "info.main"
                        : "warning.main"
                    }
                  >
                    <Card
                      style={{
                        backgroundColor:
                          Date.now() > Date.parse(item.dueDate)
                            ? "Coral"
                            : "white",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6">{item.description}</Typography>
                        <Typography color="textSecondary">
                          {item.dueDate}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {/* //Buttons for Card---------------------- */}
                        <div>
                          <Grid container justify="center" spacing={2}>
                            <Box p={1}>
                              <Fab
                                color="primary"
                                aria-label="add"
                                size="small"
                              >
                                <EditIcon />
                              </Fab>
                            </Box>
                            <Box p={1}>
                              <Fab
                                color="secondary"
                                aria-label="edit"
                                size="small"
                                onClick={() =>
                                  setCards(
                                    Cards.filter(
                                      (myitem) => myitem.id !== item.id
                                    )
                                  )
                                }
                              >
                                <DeleteIcon />
                              </Fab>
                            </Box>
                            <Box p={1}>
                              <Fab aria-label="input" size="small">
                                <InputIcon />
                              </Fab>
                            </Box>
                          </Grid>
                        </div>
                        {/* //Buttons for Card---------------------- */}
                      </CardActions>
                    </Card>
                  </Box>
                );
            })}
            {/* //Card------------------------ */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
