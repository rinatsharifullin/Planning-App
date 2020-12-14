import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import QueuePlayNextIcon from "@material-ui/icons/QueuePlayNext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

export default function CardButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab size="small" color="primary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab size="small" color="secondary" aria-label="edit">
        <DeleteIcon />
      </Fab>
      <Fab size="small" color="default" aria-label="edit">
        <QueuePlayNextIcon />
      </Fab>
    </div>
  );
}