import * as actions from '../actionsType.js/actionsType';
export const increase = (nr) => {
  return {
    type: actions.INCREASE,
    payload: nr,
  };
};
export const decreace = (nr) => {
  return {
    type: actions.DECREASE,
    payload: nr,
  };
};

export const toLoggIn = () => {
  return {
    type: actions.LOGGEDIN,
  };
};
