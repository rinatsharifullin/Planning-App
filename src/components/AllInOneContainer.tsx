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
  const [text, setText] = useState("qwe");
  //Card---------------------
  function SimpleCard() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6">{text}</Typography>
          <Typography color="textSecondary">12/12/12</Typography>
        </CardContent>
        <CardActions>
          <FloatingActionButtons />
        </CardActions>
      </Card>
    );
  }
  //Card---------------------
  //Buttons------------------
  const FloatingActionButtons = () => {
    return (
      <div>
        <Grid container justify="center" spacing={2}>
          <Box p={1}>
            <Fab color="primary" aria-label="add" size="small">
              <EditIcon />
            </Fab>
          </Box>
          <Box p={1}>
            <Fab color="secondary" aria-label="edit" size="small">
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
    );
  };
  //Buttons------------------
  //Modal----------------------
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

  const TransitionsModal = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

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
            <Card>
              <CardContent>
                <TextFields />
                <MaterialUIPickers />
              </CardContent>
              <CardActions>
                <ButtonGroup
                  variant="text"
                  color="primary"
                  aria-label="text primary button group"
                >
                  <Button onClick={handleClose}>OK</Button>
                  <Button onClick={handleClose}>Cancel</Button>
                </ButtonGroup>
              </CardActions>
            </Card>
          </Fade>
        </Modal>
      </div>
    );
  };
  //Modal----------------------

  //Text----------------------
  function TextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      // setText(event.target.value);
    };
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Description"
          multiline
          value={value}
          onChange={handleChange}
          autoFocus
        />
      </form>
    );
  }
  //Text----------------------
  //Date----------------------

  function MaterialUIPickers() {
    const classes = useStyles();
    //Set default date & time
    var nowDate = new Date().toISOString().slice(0, -8);

    const [value, setValue] = React.useState(nowDate);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return (
      <form className={classes.container} noValidate>
        <TextField
          onChange={handleChange}
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
    );
  }
  //Date----------------------

  return (
    <Container maxWidth="md" component="main">
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
        Planning App
      </Typography>
      <TransitionsModal />
      <Grid container justify="center" spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={2}>
            <Box p={1}>
              <Typography variant="h5">New</Typography>
            </Box>
            <Box p={1}>
              <SimpleCard />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
