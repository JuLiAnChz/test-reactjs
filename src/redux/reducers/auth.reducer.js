import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT
} from '../types';

let user = JSON.parse(localStorage.getItem('cUser'));
const initialState = user ? {loggedIn: true, user} : {loggedIn: false, user: null};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case USER_LOGIN_FAILURE:
      return {};
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default reducer;