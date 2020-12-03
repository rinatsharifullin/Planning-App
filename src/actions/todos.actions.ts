
export type AddTodoActionType = ReturnType<typeof addTodoAction>;
const addTodoAction = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export type RemoveTodoActionType = ReturnType<typeof removeTodoAction>
const removeTodoAction = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo.id,
  };
};

export { addTodoAction, removeTodoAction };
