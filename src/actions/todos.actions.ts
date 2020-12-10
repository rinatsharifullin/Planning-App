import { ThunkDispatch } from "redux-thunk";
import { Todo } from "../App";
import { getTodosService, removeTodoApiService, setTodoService } from "../services/todos.services";

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
const setTodosAction = (todo: Todo) => {
  return {
    type: "SET_TODOS",
    payload: todo,
  };
};

const getTodos = () => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const response = await getTodosService(); // connect to the service
      dispatch(setTodosAction(response)); // dispatch the response (list of todos)
    } catch (e) {
      console.log(e);
    }
  };
};

const setTodo = (todo: Todo) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      await setTodoService(todo);
      dispatch(addTodoAction(todo));
    } catch (e) {
      console.log(e);
    }
  };
};

const removeTodoApi = (todo: Todo) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      await removeTodoApiService(todo);
      dispatch(removeTodoAction(todo));
    } catch (e) {
      console.log(e);
    }
  };
};

export { addTodoAction, removeTodoAction, setTodosAction, getTodos, setTodo, removeTodoApi };
