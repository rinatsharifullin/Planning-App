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
  Grid,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import InputIcon from "@material-ui/icons/Input";
import DeleteIcon from "@material-ui/icons/Delete";

export const AllInOneContainer = () => {
  var nowDate = new Date().toISOString().slice(0, -8);
  const [text, setText] = useState("");
  const [date, setDate] = useState(nowDate);
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [statusEdit, setStatusEdit] = useState("");
  const [Cards, setCards] = useState([
    { id: 0, description: "", status: "", dueDate: "" },
  ]);

  var SingleCard = { id: 123, description: "", status: "", dueDate: "" };

  const updateStatusNew = (id) => {
    for (const x in Cards) {
      if (Cards[x].id === id) {
        console.log(Cards[x].status);
        if (Cards[x].status === "new") Cards[x].status = "pro";

        break;
      }
    }
    setCards([...Cards]);
  };
  const updateStatusPro = (id) => {
    for (const x in Cards) {
      if (Cards[x].id === id) {
        console.log(Cards[x].status);

        if (Cards[x].status === "pro") Cards[x].status = "fin";
        break;
      }
    }
    setCards([...Cards]);
  };

  // ---------------------
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
      dueDate: date,
    };
    console.log(Cards);
    if (text) setCards([...Cards, SingleCard]);
    setText("");
    setDate(nowDate);
    setOpen(false);
  };

  // ---------------------
  const handleOpenEdit = (id) => {
    for (const x of Cards) {
      if (x.id === id) {
        setText(x.description);
        setDate(x.dueDate);
        setIdEdit(x.id);
        setStatusEdit(x.status);
        break;
      }
    }
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setText("");
    setOpenEdit(false);
  };

  const handleCloseOkEdit = () => {
    for (const x in Cards) {
      if (Cards[x].id === idEdit) {
        console.log(idEdit);
        Cards[x].description = text;
        Cards[x].dueDate = date;
        break;
      }
    }
    if (text) setCards(Cards);
    setText("");
    setOpenEdit(false);
  };
  // ---------------------
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

  //DOM----------------------

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
            {Cards.filter((item) => item.status === "new").map((item) => {
              if (item.description)
                return (
                  <Box
                    p={1}
                    key={item.id}
                    bgcolor={
                      item.status === "pro"
                        ? "success.main"
                        : item.status === "new"
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
                          {item.dueDate.slice(0, -6) +
                            " " +
                            item.dueDate.slice(11, 16)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {/* //Buttons for Card---------------------- */}
                        <div>
                          <Grid container justify="center" spacing={2}>
                            <Box p={1}>
                              {/* //Modal Edit---------------------- */}
                              <div>
                                <Fab
                                  size="small"
                                  color={"primary"}
                                  aria-label="edit"
                                  onClick={() => {
                                    handleOpenEdit(item.id);
                                  }}
                                >
                                  <EditIcon />
                                </Fab>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className={classes.modal}
                                  open={openEdit}
                                  onClose={handleClose}
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
                                        <form
                                          className={classes.root}
                                          noValidate
                                          autoComplete="off"
                                        >
                                          <TextField
                                            id="standard-basic"
                                            label="Description"
                                            multiline
                                            value={text}
                                            onChange={handleChangeText}
                                            autoFocus
                                          />
                                        </form>
                                        <form
                                          className={classes.container}
                                          noValidate
                                        >
                                          <TextField
                                            onChange={handleChangeDate}
                                            id="datetime-local"
                                            label="Select Date and Time"
                                            type="datetime-local"
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
                                          <Button onClick={handleCloseOkEdit}>
                                            OK
                                          </Button>
                                          <Button onClick={handleCloseEdit}>
                                            Cancel
                                          </Button>
                                        </ButtonGroup>
                                      </CardActions>
                                    </Card>
                                    {/* Card in Modal----------------------- */}
                                  </Fade>
                                </Modal>
                              </div>
                              {/* //Modal Edit---------------------- */}
                            </Box>
                            <Box p={1}>
                              <Fab
                                color="secondary"
                                aria-label="delete"
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
                              <Fab
                                aria-label="input"
                                size="small"
                                onClick={() => updateStatusNew(item.id)}
                              >
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

        <Grid item xs={4}>
          <Paper elevation={2}>
            <Box p={1}>
              <Typography variant="h5">In Progress</Typography>
            </Box>
            {/* //Card------------------------ */}
            {Cards.filter((item) => item.status === "pro").map((item) => {
              if (item.description)
                return (
                  <Box
                    p={1}
                    key={item.id}
                    bgcolor={
                      item.status === "pro"
                        ? "success.main"
                        : item.status === "new"
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
                          {item.dueDate.slice(0, -6) +
                            " " +
                            item.dueDate.slice(11, 16)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {/* //Buttons for Card---------------------- */}
                        <div>
                          <Grid container justify="center" spacing={2}>
                            <Box p={1}>
                              {/* //Modal Edit---------------------- */}
                              <div>
                                <Fab
                                  size="small"
                                  color={"primary"}
                                  aria-label="edit"
                                  onClick={() => {
                                    handleOpenEdit(item.id);
                                  }}
                                >
                                  <EditIcon />
                                </Fab>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className={classes.modal}
                                  open={openEdit}
                                  onClose={handleClose}
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
                                        <form
                                          className={classes.root}
                                          noValidate
                                          autoComplete="off"
                                        >
                                          <TextField
                                            id="standard-basic"
                                            label="Description"
                                            multiline
                                            value={text}
                                            onChange={handleChangeText}
                                            autoFocus
                                          />
                                        </form>
                                        <form
                                          className={classes.container}
                                          noValidate
                                        >
                                          <TextField
                                            onChange={handleChangeDate}
                                            id="datetime-local"
                                            label="Select Date and Time"
                                            type="datetime-local"
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
                                          <Button onClick={handleCloseOkEdit}>
                                            OK
                                          </Button>
                                          <Button onClick={handleCloseEdit}>
                                            Cancel
                                          </Button>
                                        </ButtonGroup>
                                      </CardActions>
                                    </Card>
                                    {/* Card in Modal----------------------- */}
                                  </Fade>
                                </Modal>
                              </div>
                              {/* //Modal Edit---------------------- */}
                            </Box>
                            <Box p={1}>
                              <Fab
                                color="secondary"
                                aria-label="delete"
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
                              <Fab
                                aria-label="input"
                                size="small"
                                onClick={() => updateStatusPro(item.id)}
                              >
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

        <Grid item xs={4}>
          <Paper elevation={2}>
            <Box p={1}>
              <Typography variant="h5">Finished</Typography>
            </Box>
            {/* //Card------------------------ */}
            {Cards.filter((item) => item.status === "fin").map((item) => {
              if (item.description)
                return (
                  <Box
                    p={1}
                    key={item.id}
                    bgcolor={
                      item.status === "pro"
                        ? "success.main"
                        : item.status === "new"
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
                          {item.dueDate.slice(0, -6) +
                            " " +
                            item.dueDate.slice(11, 16)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {/* //Buttons for Card---------------------- */}
                        <div>
                          <Grid container justify="center" spacing={2}>
                            <Box p={1}>
                              {/* //Modal Edit---------------------- */}
                              <div>
                                <Fab
                                  disabled
                                  size="small"
                                  color={"primary"}
                                  aria-label="edit"
                                  onClick={() => {
                                    handleOpenEdit(item.id);
                                  }}
                                >
                                  <EditIcon />
                                </Fab>
                                <Modal
                                  aria-labelledby="transition-modal-title"
                                  aria-describedby="transition-modal-description"
                                  className={classes.modal}
                                  open={openEdit}
                                  onClose={handleClose}
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
                                        <form
                                          className={classes.root}
                                          noValidate
                                          autoComplete="off"
                                        >
                                          <TextField
                                            id="standard-basic"
                                            label="Description"
                                            multiline
                                            value={text}
                                            onChange={handleChangeText}
                                            autoFocus
                                          />
                                        </form>
                                        <form
                                          className={classes.container}
                                          noValidate
                                        >
                                          <TextField
                                            onChange={handleChangeDate}
                                            id="datetime-local"
                                            label="Select Date and Time"
                                            type="datetime-local"
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
                                          <Button onClick={handleCloseOkEdit}>
                                            OK
                                          </Button>
                                          <Button onClick={handleCloseEdit}>
                                            Cancel
                                          </Button>
                                        </ButtonGroup>
                                      </CardActions>
                                    </Card>
                                    {/* Card in Modal----------------------- */}
                                  </Fade>
                                </Modal>
                              </div>
                              {/* //Modal Edit---------------------- */}
                            </Box>
                            <Box p={1}>
                              <Fab
                                color="secondary"
                                aria-label="delete"
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
                              <Fab aria-label="input" size="small" disabled>
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
