import classes from "*.module.css";
import React from "react";
import CreateTodo from "./components/CreateTodo";
import ListTodos from "./components/ListTodos";

import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  appName: {
    color: 'red',
    fontFamily: 'sans-serif',
    textShadow: '2px 2px purple',
    fontSize: '50px'
  },
  appBox: {
    backgroundColor: 'aqua',
    textAlign: 'center',
    padding: '20px',
    paddingBottom: '20px',
    margin: '0 auto',
    width: '50%'
  }
})

export type Todo = {
  id: number;
  description: string;
};

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appBox}>
      <h1 className={classes.appName}>Artur's Todo App</h1>
      <CreateTodo />
      <ListTodos />
    </div>
  );
}

export default App;
