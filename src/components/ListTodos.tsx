import React from "react";
import Button from "./Button";
import { connect, useDispatch } from "react-redux";
import removeTodoAction from "../actions/remove.actions";

const ListTodos = ({ todos }) => {
  let dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo, id) => (
        <li key={id}>
          {todo.description}
          <Button
            btnText="Remove"
            type="button"
            onClick={() => dispatch(removeTodoAction(todo.id))}
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

export default connect(mapStateToProps)(ListTodos);
