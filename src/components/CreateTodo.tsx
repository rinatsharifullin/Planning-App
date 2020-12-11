import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import {  setTodo } from "../actions/todos.actions";

import { createUseStyles } from "react-jss";
import { ThunkDispatch } from "redux-thunk";

const useStyles = createUseStyles({
  inputForm: {
    width: "100%",
    marginBottom: "10px",
  },
  input: {
    width: "63%",
    padding: "5px",
    border: "none",
  },
});

type InnerProps = MappedDispatch;
type OuterProps = {};
type Props = InnerProps & OuterProps;

const CreateTodo = ({ addTodo }: Props) => {

  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value) {
      return;
    } else {
      addTodo({
        id: Date.now(),
        description: value,
      });
      setValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const classes = useStyles();
  return (
    <form className={classes.inputForm} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button btnText="Submit" type="submit" />
    </form>
  );
};

type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    addTodo: (todo) => dispatch(setTodo(todo))
  
  };
};

export default connect<{}, MappedDispatch, OuterProps>(
  null,
  mapDispatchToProps
)(CreateTodo);
