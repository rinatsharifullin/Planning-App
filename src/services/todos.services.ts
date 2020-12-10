import axios from "axios";
import { Todo } from "../App";

const todosApi = axios.create({ baseURL: "http://52.213.105.232:3500/main" });

export const getTodosService = async () => {
  try {
    const response = await todosApi.get("/getTodos");
    return response.data.todos;
  } catch (e) {
    console.log(e);
  }
};

export const setTodo = async (todo: Todo) => {
  try {
    const response = await todosApi.post("/setTodo", todo);
    console.log(response.data.todos);
  } catch (e) {
    console.log(e);
  }
};


export const removeTodoApi = async (todo: Todo) => {
  try {
    const response = await todosApi.post("/removeTodo", todo);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

