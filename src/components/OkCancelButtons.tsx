import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(3, 1, 0, 1),
      },
    },
  })
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button size="small" variant="contained" color="primary">
        Ok
      </Button>
      <Button size="small" variant="contained" color="secondary">
        Cancel
      </Button>
    </div>
  );
}
