import * as actions from '../actionsType.js/actionsType';
export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREASE:
      return state + action.payload;
    case actions.DECREASE:
      return state - action.payload;
    default:
      return state;
  }
};
