import { Todo } from "../App";


export type AddTodoActionType = ReturnType<typeof addTodoAction>;
const addTodoAction = (todo: Todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export type RemoveTodoActionType = ReturnType<typeof removeTodoAction>;
const removeTodoAction = (todo: Todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};

//export type SetTodosActionType = ReturnType<typeof setTodosAction >;
const setTodosAction  = (todo: Todo[]) => {
  return {
    type: "SET_TODOS",
    payload: todo,
  };
};

export { addTodoAction, removeTodoAction, setTodosAction };
