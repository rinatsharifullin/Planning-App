import React, { useState } from 'react';
import CreateTodo from './components/CreateTodo';

function App() {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (addNewTodo) => {
    setTodos([...todos, addNewTodo])
  }

  return (
    <>
      <h1>Artur's Todo App</h1>
      <CreateTodo addTodo={handleAddTodo}/>
      <ul>
        {todos.map((todo) => <li>{todo}</li>)}
      </ul>
    </>
  );
}

export default App;
