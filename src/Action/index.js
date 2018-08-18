import * as ActionType from "./Type";

export const increment = () => {
  return {
    type: ActionType.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: ActionType.DECREMENT
  };
};
