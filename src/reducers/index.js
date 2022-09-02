import { countReducer } from './count';
import { loginReducer } from './login';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  count: countReducer,
  logIn: loginReducer,
});
