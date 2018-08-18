import * as ActionType from "../Action/Type";

export default (state = 0, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;
    case ActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
