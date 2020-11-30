import React from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { removeTodoAction } from "../actions/todos.actions";

const ListTodos = ({ todos, removeTodo}) => {
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('delete been clicked');
  return {
    removeTodo: (todo: Todo) => dispatch(removeTodoAction(todo.id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);

