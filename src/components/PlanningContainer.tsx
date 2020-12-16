import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import AddEditDialog from "./AddEditDialog";
import SingleCard from "./SingleCard";

export const PlanningContainer = () => {
  const [cards, setCard] = React.useState([
    {
      id: "1",
      description: "Work",
      status: "new",
      dueDate: "2020-12-12T00:00",
    },
  ]);

  const addNewCard = (
    textValue: string,
    dateValue: string,
    id: string,
    status: string
  ) => {
    setCard([
      ...cards,
      {
        id: id,
        description: textValue,
        status: status,
        dueDate: dateValue,
      },
    ]);
    console.log(cards);
  };

  return (
    <>
      <Container maxWidth="md" component="main">
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Planning App
        </Typography>
        <AddEditDialog
          id={Date.now().toString()}
          status="new"
          addCard={addNewCard}
        />

        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h5">New</Typography>
            {cards.map((item) => {
              return (
                <Box mb={1} key={item.id}>
                  <SingleCard
                    dateValue={item.dueDate}
                    textValue={item.description}
                    backColour="White"
                  />
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">In Progress</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Finished</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
