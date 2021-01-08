import { userService } from '../../services';
import { alertActions } from './';
import { history } from '../../helpers';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from '../types';

export const userActions = {
  login,
  logout,
  register
};

function login(username, password, from) {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username, password).then((user) => {
      dispatch(success(user));
      history.push('/dashboard');
    }, (error) => {
      const type = error.response && (error.response.data.error || 'normal');
      let messages;
      switch(type) {
        case 'invalid_credentials':
          messages = 'Usuario/contraseña inválidos';
        break;

        case 'could_not_create_token':
          messages = 'Se ha producido un error al iniciar sesión, contactese con el administrador del sistema';
        break;

        default:
          messages = 'No es posible iniciar sesión, intentelo más tarde';
      }
      dispatch(failure(messages));
      dispatch(alertActions.error(messages));
    });
  };

  function request(user) { return {type: USER_LOGIN_REQUEST, user}}
  function success(user) { return {type: USER_LOGIN_SUCCESS, user}}
  function failure(message) { return {type: USER_LOGIN_FAILURE, message}}
}

function logout() {
  userService.logout();
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    userService.register(user).then((resUser) => {
      dispatch(success(resUser));
      history.push('/signin');
      dispatch(alertActions.success('Registro exitoso'));
    }, (error) => {
      dispatch(failure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    })
  }

  function request(resUser) { return {type: USER_REGISTER_REQUEST, user: resUser}}
  function success(resUser) { return {type: USER_REGISTER_SUCCESS, user: resUser}}
  function failure(message) { return {type: USER_REGISTER_FAILURE, message}}
}