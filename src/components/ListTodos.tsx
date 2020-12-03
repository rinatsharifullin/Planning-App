import React, { Dispatch } from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { removeTodoAction, RemoveTodoActionType } from "../actions/todos.actions";

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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: Dispatch<RemoveTodoActionType>) => {
  return {
    removeTodo: (todo: Todo) => dispatch(removeTodoAction(todo)),
  };
};

export default connect<MappedState, MappedDispatch, OuterProps>(
  mapStateToProps,
  mapDispatchToProps
)(ListTodos);
