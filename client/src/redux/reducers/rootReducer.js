import { combineReducers } from 'redux';
import { toDoReducer } from './toDoReducer';
import { authReducer } from './authReducer';
import { errReducer } from './errReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  toDo: toDoReducer,
  auth: authReducer,
  err: errReducer,
  loading: loadingReducer,
});
