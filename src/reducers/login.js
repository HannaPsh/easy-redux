import * as actions from '../actionsType.js/actionsType';
export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case actions.LOGGEDIN:
      return !state;
    default:
      return state;
  }
};
