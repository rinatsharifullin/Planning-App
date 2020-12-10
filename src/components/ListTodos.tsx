import React, { useEffect } from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import {
  getTodos,
  removeTodoAction,
} from "../actions/todos.actions";
import { AppState } from "../reducers/todos.reducer";
import { createUseStyles } from "react-jss";
import { ThunkDispatch } from "redux-thunk";


const useStyles = createUseStyles({
  todoBox: {
    listStyleType: "none",
    width: "100%",
    margin: " 0",
    padding: "0",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 5px 5px 10px",
    marginBottom: "10px",
    backgroundColor: "white",
    fontSize: "1.25em",
  },
});

type InnerProps = MappedState & MappedDispatch;
type OuterProps = {};
type Props = InnerProps & OuterProps;

const ListTodos = ({ todos, removeTodo, getTodoList }: Props) => {
  useEffect(() => {
    getTodoList(); // this is a reference to a function inside our mapDispatchToProps
  }, []);

  const classes = useStyles();
  return (
    <ul className={classes.todoBox}>
      {todos.map((todo, id) => (
        <li key={id} className={classes.todoItem}>
          {todo.description}
          <Button
            btnText="Remove"
            type="button"
            onClick={() => removeTodo(todo)}
          />
        </li>
      ))}
    </ul>
  );
};

type MappedState = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos,
  };
};

type MappedDispatch = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    removeTodo: (todo: Todo) => dispatch(removeTodoAction(todo)),
    getTodoList: () => dispatch(getTodos()),
  };
};


export default connect<MappedState, MappedDispatch, OuterProps, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(ListTodos);
