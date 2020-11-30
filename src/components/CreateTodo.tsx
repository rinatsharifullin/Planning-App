import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { addTodoAction}  from "../actions/todos.actions";

const CreateTodo = ({ addTodo }) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <Button btnText="Submit" type="submit" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo: Todo) => dispatch(addTodoAction(todo)),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
