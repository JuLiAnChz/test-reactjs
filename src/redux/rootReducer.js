import { combineReducers } from 'redux';

import alertReducer from './reducers/alert.reducer';
import authReducer from './reducers/auth.reducer';
import todoReducer from './reducers/todo.reducer';

const rootReducer = combineReducers({
  alert: alertReducer,
	auth: authReducer,
	todos: todoReducer
});

export default rootReducer;