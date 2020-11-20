import React, { useState } from 'react';
import Button from './Button';

const CreateTodo = ( {addTodo} ) => {

    const [value, setValue] = useState();
    
    const handleSubmit = (event) =>{
      event.preventDefault();
      addTodo(value);
      setValue('');
    }

    const handleChange = (event) =>{
      setValue(event.currentTarget.value);
    }

    return(   
      <form onSubmit={handleSubmit}>
        <input type ="text" value={value} onChange={handleChange}/>
        <Button btnText='Add Todo' type='submit'/>
      </form>
    )

}

export default CreateTodo;