import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardButtons from "./CardButtons";

export default function SingleCard({ backColour }) {
  return (
    <Card style={{ backgroundColor: backColour }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Planned Item
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          14/12/2020
        </Typography>
      </CardContent>
      <CardActions>
        <CardButtons />
      </CardActions>
    </Card>
  );
}
// LightSkyBlue
// Coral;
// LightGreen
