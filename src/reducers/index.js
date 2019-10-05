import { combineReducers } from 'redux';
import HistoryListReducer from './HistoryListReducer';
import BoardReducer from './BoardReducer';

export default combineReducers({
  HistoryListReducer,
  BoardReducer
});
