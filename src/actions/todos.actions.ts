const addTodoAction = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

const removeTodoAction = (todoId) => {
  return {
    type: "DELETE_TODO",
    payload: todoId,
  };
};

//export default addTodoAction;

export {
  addTodoAction, 
  removeTodoAction
};
