import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <Button 
    btnText='Submit'
    type='submit'
    onClick={() => console.log('button was clicked')} />
    
  );
}

export default App;
