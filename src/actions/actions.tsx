import { ThunkDispatch } from "redux-thunk";
import { store } from "../index";
import { CardType } from "../components/PlanningApp";
import * as actionType from "./actionTypes";
import * as service from "./services";

export const SetCards = (Cards: CardType[]) => {
  return { type: actionType.SET_CARDS, Cards };
};

export const SetCard = (Card: CardType) => {
  return { type: actionType.SET_CARD, Card };
};

export const ChangeTeam = (team: boolean) => {
  return { type: actionType.CHANGE_TEAM, team };
};

export const GetTodoList = () => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const response = await service.getTodoList();
      const responseTeam = response.filter(
        (item: CardType) =>
          item.description.substring(0, 2) ===
          (store.getState().team ? "GT" : "BT")
      );
      dispatch(SetCards(responseTeam));
    } catch (e) {
      console.log(e);
    }
  };
};

export const HandleMove = (statusNew: string, id: string) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      var Cards = JSON.parse(JSON.stringify(store.getState().Cards));
      for (const x in Cards) {
        if (Cards[x].id === id) {
          Cards[x].status = statusNew;
          dispatch(SetCards(Cards));
          await service.updateTodo(Cards[x]);
          break;
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const HandleRemoveCard = (id: string) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      var Cards = JSON.parse(JSON.stringify(store.getState().Cards));
      dispatch(SetCards(Cards.filter((myitem: CardType) => myitem.id !== id)));
      await service.removeTodo(id);
    } catch (e) {
      console.log(e);
    }
  };
};
