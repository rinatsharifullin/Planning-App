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

export default function DateTimePicker({ dateValue }) {
  const classes = useStyles();
  //Set default date & time
  var nowDate = new Date().toISOString().slice(0, -8);
  dateValue(nowDate);
  const [value, setValue] = React.useState(nowDate);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dateValue(value);
    // console.log(value === "undefined" ? nowDate : value);
  };
  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={handleChange}
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
