import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ListTodos from "./components/ListTodos";

export type Todo = {
  id: number;
  description: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoItem: Todo) => {
    setTodos([...todos, todoItem]);
  };

  const handleRemoveTodo = (todo: Todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <>
      <h1>Artur's Todo App</h1>
      <CreateTodo addTodo={handleAddTodo} />
      <ListTodos todos={todos} removeTodo={handleRemoveTodo} />
    </>
  );
}

export default App;
