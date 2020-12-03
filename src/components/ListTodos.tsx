import React from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { removeTodoAction } from "../actions/todos.actions";

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

type MappedState = ReturnType<typeof mapStateToProps>;

type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (todo: Todo) => dispatch(removeTodoAction(todo)),
  };
};

export default connect<MappedState, MappedDispatch, OuterProps>(
  mapStateToProps,
  mapDispatchToProps
)(ListTodos);
