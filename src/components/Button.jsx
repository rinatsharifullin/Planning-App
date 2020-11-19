import React from 'react';

const Button = ( {btnText, type, onClick} ) =>{
  return( 
    <button style={{backgroundColor: btnText === "Submit" ? "#1976d2" : "#dc004e"}}
      type={type}
      onClick={onClick}>
      {btnText}
    </button>   
  );
}

export default Button;