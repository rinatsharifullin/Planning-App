import React, { useState } from 'react';
import CreateTodo from './components/CreateTodo';

function App() {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (value) => {
    setTodos([...todos, value])
  }

  return (
    <>
      <h1>Artur's Todo App</h1>
      <CreateTodo addTodo={handleAddTodo}/>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </>
  );
}

export default App;
