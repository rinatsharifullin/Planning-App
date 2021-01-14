import {
  Box,
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import ModalEdit from "./Modal/ModalEdit";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as action from "../../actions/actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CardType } from "../PlanningApp";
import { AppState } from "../../reducer/reducer";

var NewCards;

const ColumnContainer = ({ Cards, handleMove, handleRemoveCard }) => {
  const [state, setState] = useState(Cards);

  useEffect(() => {
    NewCards = JSON.parse(JSON.stringify(Cards));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setState(NewCards);
  }, [Cards]);

  const AllColStatus = ["todo", "inProgress", "completed"];

  function onDragEnd(result: any) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
    if (sInd !== dInd) {
      const newState = Array.from(state);
      var x: any;
      for (x of newState) {
        if (x.id === result.draggableId) {
          handleMove(result.destination.droppableId, x.id);
          x.status = result.destination.droppableId;
          setState(newState);
          break;
        }
      }
    }
  }
  const grid = 8;

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging && "lightgreen",
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver && "lightblue",
    padding: grid,
  });

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {AllColStatus.map((ColStatus, ind) => {
          return (
            <Droppable key={ind} droppableId={ColStatus}>
              {(provided: any, snapshot: any) => (
                <Grid
                  item
                  xs={4}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <Paper elevation={2}>
                    <Box
                      p={1}
                      bgcolor={
                        ColStatus === "todo"
                          ? "warning.main"
                          : ColStatus === "inProgress"
                          ? "success.main"
                          : "info.main"
                      }
                    >
                      <Typography variant="h5">
                        {ColStatus === "todo"
                          ? "New"
                          : ColStatus === "inProgress"
                          ? "In Progress"
                          : "Finished"}
                      </Typography>
                    </Box>
                    {/* //Card------------------------ */}
                    {state
                      .filter((item: CardType) => item.status === ColStatus)
                      .map((item: CardType, index: number) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Box
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                                p={1}
                                key={item.id}
                                bgcolor={
                                  ColStatus === "todo"
                                    ? "warning.main"
                                    : ColStatus === "inProgress"
                                    ? "success.main"
                                    : "info.main"
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
                                    <Typography variant="h6">
                                      {item.description}
                                    </Typography>
                                    <Typography color="textSecondary">
                                      {item.dueDate.slice(0, 10)}
                                    </Typography>
                                  </CardContent>
                                  <CardActions>
                                    {/* //Buttons for Card---------------------- */}
                                    <div>
                                      <Grid
                                        container
                                        justify="center"
                                        spacing={2}
                                      >
                                        <Box p={1}>
                                          {/* //Modal Edit---------------------- */}

                                          <ModalEdit id={item.id} />

                                          {/* //Modal Edit---------------------- */}
                                        </Box>
                                        <Tooltip title="Delete" placement="top">
                                          <Box p={1}>
                                            <Fab
                                              color="secondary"
                                              aria-label="delete"
                                              size="small"
                                              onClick={() =>
                                                handleRemoveCard(item.id)
                                              }
                                            >
                                              <DeleteIcon />
                                            </Fab>
                                          </Box>
                                        </Tooltip>
                                      </Grid>
                                    </div>
                                    {/* //Buttons for Card---------------------- */}
                                  </CardActions>
                                </Card>
                              </Box>
                            )}
                          </Draggable>
                        );
                      })}
                    {/* //Card------------------------ */}
                  </Paper>
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    Cards: state.Cards,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    handleMove: (status: string, id: string) =>
      dispatch(action.HandleMove(status, id)),
    handleRemoveCard: (id: string) => dispatch(action.HandleRemoveCard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
