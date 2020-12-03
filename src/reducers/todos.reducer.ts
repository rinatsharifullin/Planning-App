import { AddTodoActionType, RemoveTodoActionType } from "../actions/todos.actions";
import { Todo } from "../App";

type DefaultState = {
  todos: Todo[];
};

const defaultState: DefaultState = { todos: [] };

export type AppState = ReturnType<typeof reducer>;

const reducer = (state = defaultState, action: AddTodoActionType | RemoveTodoActionType) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default reducer;
