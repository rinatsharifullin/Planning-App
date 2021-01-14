import * as actionType from "../actions/actionTypes";
import { CardType } from "../components/PlanningApp";

export type AppState = ReturnType<typeof reducer>;

const Default = {
  team: false,
  Cards: [{ id: "", description: "", status: "", dueDate: "" }],
};

export const reducer = (
  state = Default,
  action: {
    type: string;
    Cards: CardType[];
    Card: CardType;
    team: boolean;
  }
) => {
  switch (action.type) {
    case actionType.SET_CARDS: {
      return {
        ...state,
        Cards: action.Cards,
      };
    }
    case actionType.SET_CARD: {
      return {
        ...state,
        Cards: [...state.Cards, action.Card],
      };
    }

    case actionType.CHANGE_TEAM: {
      return {
        ...state,
        team: action.team,
      };
    }

    default:
      return state;
  }
};
