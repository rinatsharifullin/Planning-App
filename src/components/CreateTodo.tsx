import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from './Button';


const CreateTodo = ( {addTodo}:any ) => {

    const [value, setValue] = useState<string>('');
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      const todoItem ={
        id: new Date().getTime(),
        description: value,
      };
      addTodo(todoItem);
      setValue('');
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
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