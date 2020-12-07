import React, { Dispatch } from "react";
import Button from "./Button";
import { Todo } from "../App";
import { connect } from "react-redux";
import { removeTodoAction, RemoveTodoActionType } from "../actions/todos.actions";
import { AppState } from "../reducers/todos.reducer";

import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  todoBox:{
    listStyleType: 'none',
  },
  todoItem: {
    padding: '5px 0',
    marginBottom: '10px'
  }
})


type InnerProps = MappedState & MappedDispatch;
type OuterProps = {};
type Props = InnerProps & OuterProps;

const ListTodos = ({ todos, removeTodo }: Props) => {
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

const mapDispatchToProps = (dispatch: Dispatch<RemoveTodoActionType>) => {
  return {
    removeTodo: (todo: Todo) => dispatch(removeTodoAction(todo)),
  };
};

export default connect<MappedState, MappedDispatch, OuterProps, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(ListTodos);
