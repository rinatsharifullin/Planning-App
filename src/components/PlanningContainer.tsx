import { Box, Container, Fab, Grid, Typography } from "@material-ui/core";
import React from "react";
import SingleCard from "./Card";
import AddIcon from "@material-ui/icons/Add";

export const PlanningContainer = () => {
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
        <Fab size="small" color="default" aria-label="edit">
          <AddIcon />
        </Fab>

        <Grid container justify="center" spacing={2}>
          <Grid item xs={4} justify="center">
            <Typography variant="h5">New</Typography>
            <Box mb={1}>
              <SingleCard />
            </Box>
            <Box mb={1}>
              <SingleCard />
            </Box>
            <Box mb={1}>
              <SingleCard />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">In Progress</Typography>
            <Box mb={1}>
              <SingleCard />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Finished</Typography>
            <Box mb={1}>
              <SingleCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};