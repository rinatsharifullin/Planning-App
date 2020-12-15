import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

export default function DateTimePicker() {
  const classes = useStyles();
  //Set default date & time
  var nowDate = new Date().toISOString().slice(0, -8);

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Select Date and Time"
        type="datetime-local"
        defaultValue={nowDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
