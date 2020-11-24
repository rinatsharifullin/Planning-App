import React, { useState } from 'react';
import Button from './Button';

const CreateTodo = ( {addTodo}:any ) => {

    const [value, setValue] = useState([]);
    
    const handleSubmit = (event:any) =>{
      event.preventDefault();
      const todoItem ={
        id: new Date().getTime(),
        description: value,
      };
      addTodo(todoItem);
      //setValue("");
    }

    const handleChange = (event:any) =>{
      setValue(event.currentTarget.value);
    }

    return(   
      <form onSubmit={handleSubmit}>
        <input type ="text" value={value} onChange={handleChange}/>
        <Button btnText='Submit' type='submit'/>
      </form>
    )

}

export default CreateTodo;