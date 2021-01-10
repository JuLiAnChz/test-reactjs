import {
  ALERT_CLEAR,
  ALERT_INFO,
  ALERT_ERROR,
  ALERT_SUCCESS,
  ALERT_WARNING
} from '../types';

const INITIAL_STATE = {
  message: null,
  type: null
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ALERT_SUCCESS:
      return {
        ...state,
        type: 'alert-success',
        message: action.message
      };
    case ALERT_ERROR:
      return {
        ...state,
        type: 'alert-error',
        message: action.message
      };
    case ALERT_INFO:
      return {
        ...state,
        type: 'alert-info',
        message: action.message
      };
    case ALERT_WARNING:
      return {
        ...state,
        type: 'alert-warning',
        message: action.message
      };
    case ALERT_CLEAR:
      return {...state, type: null, message: null};
    default:
      return state;
  }
}

export default reducer;