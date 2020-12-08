import {
  AddTodoActionType,
  RemoveTodoActionType,
} from "../actions/todos.actions";
import { Todo } from "../App";

type DefaultState = {
  todos: Todo[];
};

const defaultState: DefaultState = { todos: [] };

export type AppState = ReturnType<typeof reducer>;

const reducer = (
  state = defaultState,
  action: AddTodoActionType | RemoveTodoActionType | {type: string; payload: any}
  //action : {type: string; payload: any}
) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "SET_TODOS": {
      return { ...state,
         todos: action.payload };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};

export default reducer;
