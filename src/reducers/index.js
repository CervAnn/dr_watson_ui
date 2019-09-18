import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { addMessageReducer } from './addMessageReducer';

const rootReducer = combineReducers({
  user,
  errorMsg,
  messages: addMessageReducer
});

export default rootReducer;