import React, { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';

export type Todo = {
  id: number; 
  description: string
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoItem:any) => {
    setTodos([...todos, todoItem])
    console.log(todoItem);
  }

  const handleRemoveTodo = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>Artur's Todo App</h1>
      <CreateTodo addTodo={handleAddTodo}/>
      <ListTodos todos={todos} removeTodo={handleRemoveTodo}/>
    </>
  );
}

export default App;
