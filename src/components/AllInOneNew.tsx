import { Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { ModalAdd } from "./Modal/ModalAdd";
import { ColumnOfCards } from "./ColumnOfCards";

export const AllInOneContainer = () => {
  const [Cards, setCards] = useState([
    { id: 0, description: "", status: "", dueDate: "" },
  ]);

  //DOM----------------------

  return (
    <Container maxWidth="md" component="main">
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Planning App
      </Typography>
      {/* //Modal---------------------- */}
      <ModalAdd ChildCard={(cards) => setCards([...Cards, cards])} />
      {/* //Modal---------------------- */}
      <Grid container justify="center" spacing={2}>
        {/* New status Column */}
        <ColumnOfCards ChildCards={Cards} cardsStatus={"todo"} />
        {/* In Progress Column */}
        <ColumnOfCards ChildCards={Cards} cardsStatus={"inProgress"} />
        {/* Finished column */}
        <ColumnOfCards ChildCards={Cards} cardsStatus={"completed"} />
      </Grid>
    </Container>
  );
};
