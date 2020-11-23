import React, { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';

function App() {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (value) => {
    setTodos([...todos, value])
  }

  const handleRemoveTodo = (itemToDel) => {
    setTodos(todos.filter((todo) => todo !== itemToDel));
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
