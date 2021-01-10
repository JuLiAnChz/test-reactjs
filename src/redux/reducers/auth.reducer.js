import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
	USER_LOGOUT,
	USER_LIST,
	USERS_DISABLE,
	USERS_DISABLE_FAILURE,
	USERS_RANDOM,
	USERS_RANDOM_FAILURE
} from '../types';

let user = JSON.parse(localStorage.getItem('cUser'));
const initialState = user ? {loggedIn: true, user, users: []} : {loggedIn: false, user: null, users: []};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loggingIn: true,
				user: action.user,
				users: []
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
				user: action.user,
				users: []
			};
		case USERS_RANDOM_FAILURE:
		case USERS_DISABLE_FAILURE:
    case USER_LOGIN_FAILURE:
      return {...state};
    case USER_LOGOUT:
			return {...state, user: null, loggedIn: false};
		case USER_LIST:
			return {
				...state,
				users: action.users
			};
		case USERS_DISABLE:
			return {...state, users: [...state.users.map((u) => {
				let res = u;
				for(const nUser of action.users) {
					if (nUser.id === u.id) {
						res = nUser;
					}
				}
				return res;
			})]};
		case USERS_RANDOM:
			return {
				...state,
				users: state.users.concat(action.users)
			};
    default:
      return state;
  }
}

export default reducer;