import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { ModalAdd } from "./Modal/ModalAdd";
import { ColumnOfCards } from "./ColumnOfCards";

export const AllInOneContainer = () => {
  const [Cards, setCards] = useState([
    { id: 0, description: "", status: "", dueDate: "" },
  ]);

  //DOM----------------------
  // useEffect(() => {
  //   console.log("Use effect Parent");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const updateCards = (cards) => {
    setCards([...cards]);
    console.log(cards);
  };
  return (
    <Container maxWidth="md" component="main">
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Planning App
      </Typography>
      {/* //Modal---------------------- */}
      <ModalAdd
        CardToParent={(cards) => {
          setCards([...Cards, cards]);
        }}
      />
      {/* //Modal---------------------- */}
      <Grid container justify="center" spacing={2}>
        {/* New status Column */}
        <ColumnOfCards
          CardsToParent={updateCards}
          CardsToChild={Cards}
          cardsStatus={"todo"}
        />
        {/* In Progress Column */}
        <ColumnOfCards
          CardsToParent={updateCards}
          CardsToChild={Cards}
          cardsStatus={"inProgress"}
        />
        {/* Finished column */}
        <ColumnOfCards
          CardsToParent={updateCards}
          CardsToChild={Cards}
          cardsStatus={"completed"}
        />
      </Grid>
    </Container>
  );
};
