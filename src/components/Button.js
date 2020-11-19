import React from 'react';

const clickSubmitButton = () => {
    console.log('Submit Button has been clicked');
}

const clickRemoveButton = () => {
    console.log('Remove Button has been clicked');
}

const submit = "Submit";
const remove = "Remove";

const Button = () =>{
    return(
        <label>
            <button  style={{backgroundColor: submit === "Submit" ? "#1976d2" : "#dc004e"}}
                type="submit" 
                onClick={clickSubmitButton}>
                {submit}
            </button>
            <button   style={{backgroundColor: remove === "Submit" ? "#1976d2" : "#dc004e"}}
                type="button" 
                onClick={clickRemoveButton}>
                {remove}
            </button>
        </label>
    );
}


export default Button;