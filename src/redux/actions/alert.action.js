import {
  ALERT_CLEAR,
  ALERT_INFO,
  ALERT_ERROR,
  ALERT_SUCCESS,
  ALERT_WARNING
} from '../types';

export const alertActions = {
  success,
  error,
  info,
  warning,
  clear
}

function success(message) {
  return {type: ALERT_SUCCESS, message};
}

function error(message) {
  return {type: ALERT_ERROR, message};
}

function info(message) {
  return {type: ALERT_INFO, message};
}

function warning(message) {
  return {type: ALERT_WARNING, message};
}

function clear() {
  return {type: ALERT_CLEAR};
}