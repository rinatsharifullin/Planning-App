import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { setTodosAction } from "../actions/todos.actions";
//import { Todo } from "../App";

const todosApi = axios.create({ baseURL: "http://52.213.105.232:3500/main" });

export const getTodosService = async () => {
  try {
    const response = await todosApi.get("/getTodos");
    return response.data.todos
    //console.log(response.data.todos);
  } catch (e) {
    console.log(e);
  }
};

// export const setTodo = async (todo: Todo) => {
//   try {
//     const response = await todosApi.post("/setTodos", {
//       id: todo.id,
//       description: todo.description,
//     });

//     console.log(response.data.todos);
//   } catch (e) {
//     console.log(e);
//   }
// };

export const setTodo = async (todo) => {
  try {
    const response = await todosApi.post("/setTodo", todo);
    console.log(response.data.todos);
  } catch (e) {
    console.log(e);
  }
};

// export const removeTodoApi = async (todo:Todo) => {
export const removeTodoApi = async (todo) => {
  try {
    //const response = await todosApi.post("/removeTodo", { id: todo.id });
    const response = await todosApi.post("/removeTodo", todo);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const getTodos = () => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
      try {
          const response = await getTodosService(); // connect to the service
          dispatch(setTodosAction(response)) // dispatch th response (list of todos)
      } catch (e) {
          console.log(e);
      }
    };
  };