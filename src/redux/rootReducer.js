import { combineReducers } from 'redux';

import alertReducer from './reducers/alert.reducer';
import authReducer from './reducers/auth.reducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer
});

export default rootReducer;