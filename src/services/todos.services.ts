import axios from "axios";
import { Todo } from "../App";

const todosApi = axios.create({ baseURL: "http://52.213.105.232:3500/main" });

export const getTodos = async () => {
  try {
    const response = await todosApi.get("/getTodos");
    console.log(response.data.todos);
  } catch (e) {
    console.log(e);
  }
};

export const setTodos = async (todo: Todo) => {
  try {
    const response = await todosApi.post("/setTodos", {
      id: todo.id,
      description: todo.description,
    });

    console.log(response.data.todos);
  } catch (e) {
    console.log(e);
  }
};

export const removeTodoApi = async (todo: Todo) => {
  try {
    const response = await todosApi.post("/removeTodo", { id: todo.id });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
