import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import { getTextValue } from "../actions/actions";
// import { connect } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(0, 1, 2, 1),
        width: "25ch",
      },
    },
  })
);

// textValue function sent text typed to parent
//textFromParent var initial value when edit text
export default function TextFieldsChildOfAddEditDialog({
  textValue,
  textFromParent,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(textFromParent);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    textValue(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Description"
        multiline
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     textValue: (value) => dispatch(getTextValue(value)),
//   };
// };

// export default connect(null, mapDispatchToProps)(TextFields);
