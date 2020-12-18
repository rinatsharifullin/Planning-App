import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import AddEditDialog from "./AddEditDialog";
import SingleCardOfPlanningContainer from "./SingleCardOfPlanningContainer";

export const PlanningContainer = () => {
  const [cards, setCard] = React.useState([
    {
      id: "",
      description: "",
      status: "",
      dueDate: "",
    },
  ]);

  const addNewCard = (
    textValue: string,
    dateValue: string,
    id: string,
    status: string
  ) => {
    textValue &&
      setCard([
        ...cards,
        {
          id: Date.now().toString(),
          description: textValue,
          status: "new",
          dueDate: dateValue,
        },
      ]);
    textValue = "";
    console.log(cards);
  };

  const updateCard = (textValue: string, dateValue: string) => {
    console.log(textValue, dateValue);
  };
  const DeleteCard = (id) => {
    setCard(cards.filter((item) => item.id !== id));
  };

  const EditCard = (id) => {
    console.log(id);
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
          addCard={addNewCard}
          addNew={true}
          textFromParent={""}
          sendId={""}
          receiveId={""}
        />

        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h5">New</Typography>
            {cards.map((item) => {
              if (item.description)
                return (
                  <Box mb={1} key={item.id}>
                    <SingleCardOfPlanningContainer
                      dateValue={item.dueDate}
                      textValue={item.description}
                      backColour="White"
                      status={item.status}
                      id={item.id}
                      DeleteSingleCard={DeleteCard}
                      EditSingleCard={EditCard}
                      textFromParent={item.description}
                      updateCard={updateCard}
                      sendId={item.id}
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
