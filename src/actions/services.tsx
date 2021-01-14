import axios from "axios";
import { CardType } from "../components/PlanningApp";

const todosApi = axios.create({
  baseURL: "http://52.213.105.232:3500/main/",
});

export async function getTodoList() {
  try {
    const response = await todosApi.get("/getTodos");
    return response.data.todos;
  } catch (e) {
    console.log(e);
  }
}

export async function setTodo(todo: CardType) {
  try {
    await todosApi.post("/setTodo", todo);
  } catch (e) {
    console.log(e);
  }
}

export async function updateTodo(todo: CardType) {
  try {
    await todosApi.post("/updateTodo", todo);
  } catch (e) {
    console.log(e);
  }
}

export async function removeTodo(id: string) {
  try {
    await todosApi.post("/removeTodo", { id });
  } catch (e) {
    console.log(e);
  }
}
