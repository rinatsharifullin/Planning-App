const addTodoAction = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

const removeTodoAction = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo.id,
  };
};

export { addTodoAction, removeTodoAction };
