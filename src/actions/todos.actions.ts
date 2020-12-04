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

export { addTodoAction, removeTodoAction };
