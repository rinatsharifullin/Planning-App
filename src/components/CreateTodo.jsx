import React, { useState } from 'react';
import Button from './Button';

const CreateTodo = ( {addTodo} ) => {

    const [addNewTodo, setAddNewTodo] = useState('');

    const handleSubmit = (event) =>{
      event.preventDefault();
      //const userInput = addNewTodo;
      //addTodo({userInput});
      addTodo(addNewTodo)
      setAddNewTodo('');
    }

    const handleChange = (event) =>{
      setAddNewTodo(event.currentTarget.value);
    }

    return(   
        <form>
          <input type ="text" value={addNewTodo} onChange={handleChange} />
          <Button btnText='Add Todo' type='submit' onClick={handleSubmit}/>
        </form>
    )

}

export default CreateTodo;