import React, { useState, ChangeEvent, FormEvent} from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { addTodoAction}  from "../actions/todos.actions";
import { bindActionCreators } from "redux";

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

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <Button btnText="Submit" type="submit" />
    </form>
  );
};

type MappedDispatch = {
  addTodo: (todo: Todo) => void;
}

const mapDispatchToProps = (dispatch): MappedDispatch => {
  return {
   addTodo: bindActionCreators(addTodoAction, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);