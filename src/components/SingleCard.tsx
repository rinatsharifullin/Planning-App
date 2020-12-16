import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardButtons from "./CardButtons";

export default function SingleCard({
  backColour,
  textValue,
  dateValue,
  status,
  DeleteSingleCard,
}) {
  const DeleteCard = () => {
    DeleteSingleCard();
    console.log("From Card");
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
        <CardButtons DeleteSingleCard={DeleteCard} />
      </CardActions>
    </Card>
  );
}
// LightSkyBlue
// Coral;
// LightGreen
