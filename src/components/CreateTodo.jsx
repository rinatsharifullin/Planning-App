import React, { useState } from 'react';
import Button from './Button';

const CreateTodo = ( {addTodo} ) => {

    const [addNewTodo, setAddNewTodo] = useState('');

    const handleSubmit = (event) =>{
      event.preventDefault();
      addTodo(addNewTodo)
      setAddNewTodo('');
    }

    const handleChange = (event) =>{
      setAddNewTodo(event.currentTarget.value);
    }

    return(   
        <form onSubmit={handleSubmit}>
          <input type ="text" value={addNewTodo} onChange={handleChange} required/>
          <Button btnText='Add Todo' type='submit'/>
        </form>
    )

}

export default CreateTodo;