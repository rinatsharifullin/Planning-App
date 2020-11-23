import React from 'react';
import Button from './Button';

const ListTodos = ( { todos, removeTodo} ) => {

    const deleteTodo = (todo) => {
        removeTodo(todo);
    }

    return(
      <ul>
        {todos.map((todo, index) => 
          <li key={index}>
            {todo}
            <Button btnText='Remove' type='button' onClick={() => deleteTodo(todo)}/>    
          </li>
        )}
      </ul> 
    )
}

export default ListTodos