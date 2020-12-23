import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { AddItemModal } from "./AddItemModal";

export const SingleColumn = ({
  Cards,

  handleClose,
  text,
  date,
  handleChangeText,
  handleChangeDate,
  handleRemoveCard,
  status,
  handleMoveLeft,
  handleMoveRight,
  handleCloseOkGen,
  handleOpenChild,
  open,
}) => {
  return (
    <Grid item xs={4}>
      <Paper elevation={2}>
        <Box
          p={1}
          bgcolor={
            status === "todo"
              ? "warning.main"
              : status === "inProgress"
              ? "success.main"
              : "info.main"
          }
        >
          <Typography variant="h5">
            {status === "todo"
              ? "New"
              : status === "inProgress"
              ? "In Progress"
              : "Finished"}
          </Typography>
        </Box>
        {/* //Card------------------------ */}
        {Cards.filter((item) => item.status === status).map((item) => {
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
                        <Fab
                          aria-label="input"
                          size="small"
                          onClick={() => handleMoveLeft(item.status, item.id)}
                        >
                          <ArrowBackIcon />
                        </Fab>
                      </Box>
                      <Box p={1}>
                        {/* //Modal Edit---------------------- */}
                        <AddItemModal
                          open={open[item.id]}
                          handleClose={handleClose}
                          text={text}
                          handleChangeText={handleChangeText}
                          handleChangeDate={handleChangeDate}
                          date={date}
                          handleOpenChild={handleOpenChild}
                          edit={true}
                          id={item.id}
                          handleCloseOkGen={handleCloseOkGen}
                        />
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
                          onClick={() => handleMoveRight(item.status, item.id)}
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
