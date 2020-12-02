import React from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { removeTodoAction } from "../actions/todos.actions";
import { bindActionCreators } from "redux";

type InnerProps = MappedState & MappedDispatch;
type OuterProps = {};
type Props = InnerProps & OuterProps;

const ListTodos = ({ todos, removeTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo, id) => (
        <li key={id}>
          {todo.description}
          <Button
            btnText="Remove"
            type="button"
            onClick={() => removeTodo(todo)}
          />
        </li>
      ))}
    </ul>
  );
};

type MappedState = {
  todos: Todo[]
}

type MappedDispatch = {
  removeTodo: (todo: Todo) => void,
}

const mapStateToProps= (state): MappedState => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch): MappedDispatch => {
  return {
    removeTodo: bindActionCreators(removeTodoAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);