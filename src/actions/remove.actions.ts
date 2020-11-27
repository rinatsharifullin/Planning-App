const removeTodoAction = (todoId) => {
  return {
    type: "DELETE_TODO",
    payload: todoId,
  };
};

export default removeTodoAction;
