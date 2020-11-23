import React from 'react';
import Button from './Button';

const ListTodos = ( { todos, removeTodo} ) => {

    return(
      <ul>
        {todos.map((todo, index) => 
          <li key={index}>
            {todo}
            <Button btnText='Remove' type='button' onClick={() => removeTodo(todo)}/>    
          </li>
        )}
      </ul> 
    )
}

export default ListTodos