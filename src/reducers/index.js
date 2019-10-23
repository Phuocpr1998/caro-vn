import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  BoardReducer,
  LoginReducer,
  RegisterReducer,
  ProfileReducer
});
