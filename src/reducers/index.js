import { combineReducers } from 'redux';
import GameReducer from './GameReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  GameReducer,
  LoginReducer,
  RegisterReducer,
  ProfileReducer
});
