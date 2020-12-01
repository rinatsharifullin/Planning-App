import React from "react";
import CreateTodo from "./components/CreateTodo";
import ListTodos from "./components/ListTodos";

export type Todo = {
  id: number;
  description: string;
};

function App() {

  return (
    <>
      <h1>Artur's Todo App</h1>
      <CreateTodo />
      <ListTodos />
    </>
  );
}

export default App;
