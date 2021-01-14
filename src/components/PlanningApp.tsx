import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import * as action from "../actions/actions";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import ModalCard from "./ColumnContainer/Modal/Modal";
import ColumnContainer from "./ColumnContainer/ColumnContainer";

export type CardType = {
  id: string;
  description: string;
  status: string;
  dueDate: string;
};

const AllInOneContainer = ({ getTodoList }) => {
  useEffect(() => {
    getTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md" component="main">
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Planning App
      </Typography>
      <ModalCard />
      <Grid container justify="center" spacing={2}>
        <ColumnContainer />
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    getTodoList: () => dispatch(action.GetTodoList()),
  };
};

export default connect(null, mapDispatchToProps)(AllInOneContainer);
