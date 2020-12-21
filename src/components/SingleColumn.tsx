import {
  Backdrop,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
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
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";

export const SingleColumn = ({
  Cards,
  handleOpenEdit,
  openEdit,
  handleClose,
  text,
  date,
  handleChangeText,
  handleChangeDate,
  handleCloseOkEdit,
  handleCloseEdit,
  handleRemoveCard,
  updateStatusNew,
}) => {
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
  return (
    <Grid item xs={4}>
      <Paper elevation={2}>
        <Box p={1} bgcolor={"warning.main"}>
          <Typography variant="h5">New</Typography>
        </Box>
        {/* //Card------------------------ */}
        {Cards.filter((item) => item.status === "todo").map((item) => {
          console.log(Cards);
          return (
            <Box
              p={1}
              key={item.id}
              bgcolor={
                item.status === "inProgress"
                  ? "success.main"
                  : item.status === "completed"
                  ? "info.main"
                  : "warning.main"
              }
            >
              <Card
                style={{
                  backgroundColor:
                    Date.now() > Date.parse(item.dueDate)
                      ? "PapayaWhip"
                      : "white",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{item.description}</Typography>
                  <Typography color="textSecondary">
                    {item.dueDate.slice(0, 10)}
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
                          onClick={() => handleRemoveCard(item.id)}
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
                          <ArrowForwardIcon />
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
  );
};
