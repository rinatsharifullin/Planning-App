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

  const addNewCard = (textValue, dateValue) => {};

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
        <AddEditDialog addCard={addNewCard} />

        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h5">New</Typography>
            <Box mb={1}>
              <SingleCard backColour="White" />
            </Box>
            <Box mb={1}>
              <SingleCard backColour="White" />
            </Box>
            <Box mb={1}>
              <SingleCard backColour="White" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">In Progress</Typography>
            <Box mb={1}>
              <SingleCard backColour="LightGreen" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Finished</Typography>
            <Box mb={1}>
              <SingleCard backColour="LightSkyBlue" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
