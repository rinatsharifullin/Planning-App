import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardButtonsChildOfSingleCard from "./CardButtonsChildOfSingleCard";

// backColour var receive backColor to build card
// textValue var receiv from parent and Dialog text to put
// dateValue var receiv from parent and Dialog date to put
// status var receiv from parent in what column to appear
// DeleteSingleCard function send to parent instruction of deleted id
// EditSingleCard function send to parent instruction of edited id
// id var receive from parent to recognize what delete and edit
export default function SingleCardOfPlanningContainer({
  backColour,
  textValue,
  dateValue,
  status,
  DeleteSingleCard,
  EditSingleCard,
  id,
}) {
  const DeleteCard = () => {
    DeleteSingleCard(id);
  };
  const EditCard = () => {
    EditSingleCard(id);
  };
  return (
    <Card style={{ backgroundColor: backColour }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {textValue}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {dateValue.slice(0, -6) + " " + dateValue.slice(11, 16)}
        </Typography>
      </CardContent>
      <CardActions>
        <CardButtonsChildOfSingleCard
          DeleteSingleCard={DeleteCard}
          id={id}
          EditSingleCard={EditCard}
        />
      </CardActions>
    </Card>
  );
}
// LightSkyBlue
// Coral;
// LightGreen
