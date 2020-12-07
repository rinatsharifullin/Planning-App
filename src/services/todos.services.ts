import axios from "axios";

const todosApi = axios.create({baseURL: 'http://52.213.105.232:3500/main'})

//      todosApi.get(...) or todosApi.post(...)

export const getTodos = async () => {
    try {
      const response = await todosApi.get("/getTodos");
      console.log(response.data.todos);
    } catch (e) {
      console.log(e);
    }
  };

//   export const setTodos = async () => {
//     try {
//       const response = await todosApi.post("/setTodos");
//       console.log(response.data.todos);
//     } catch (e) {
//       console.log(e);
//     }
//   };










