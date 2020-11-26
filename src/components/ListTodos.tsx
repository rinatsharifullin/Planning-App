import React from "react";
import Button from "./Button";
import { Todo } from "../App";

type OuterProps = {
  todos: Todo[];
  removeTodo: (todo: Todo) => void;
};

const ListTodos = ({ todos, removeTodo }: OuterProps) => {
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

export default ListTodos;
