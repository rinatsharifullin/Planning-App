import React, {
  useState,
  ChangeEvent,
  FormEvent,
  Dispatch,
} from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { addTodoAction, AddTodoActionType } from "../actions/todos.actions";

import { createUseStyles } from "react-jss";

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
    addTodo({
      id: Date.now(),
      description: value,
    });
    setValue("");
   
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

const mapDispatchToProps = (dispatch: Dispatch<AddTodoActionType>) => {
  
  return {
    addTodo: (todo: Todo) => dispatch(addTodoAction(todo)),
    
  };
};

export default connect<{}, MappedDispatch, OuterProps>(
  null,
  mapDispatchToProps
)(CreateTodo);
