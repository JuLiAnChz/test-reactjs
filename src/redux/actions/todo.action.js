import { todoService } from '../../services';
import { alertActions } from './';
import {
	LOAD_TODOS,
	ADD_TODO,
	DELETE_TODO,
	TOGGLE_TODO,
	TODO_FAILURE,
	TODO_UPDATE
} from '../types';

export const todoActions = {
	all,
	finished,
	add,
	remove,
	edit
};

function all() {
	return dispatch => {
		todoService.all().then((todos) => {
			dispatch({
				type: LOAD_TODOS,
				todos
			});
		}).catch((error) => {
			dispatch({
				type: TODO_FAILURE,
				message: error.message
			});
      dispatch(alertActions.error(error.message));
		});
	}
}

function finished(todo) {
	return dispatch => {
		todoService.finished(todo).then((nTodo) => {
			dispatch({
				type: TOGGLE_TODO,
				todo: nTodo
			});
		}).catch((error) => {
			dispatch({
				type: TODO_FAILURE,
				message: error.message
			});
			dispatch(alertActions.error(error.message));
		});
	}
}

function add(title) {
	return async dispatch => {
		todoService.add(title).then((todo) => {
			dispatch({
				type: ADD_TODO,
				todo
			});
		}).catch((error) => {
			dispatch({
				type: TODO_FAILURE,
				message: error.message
			});
			dispatch(alertActions.error(error.message));
		});
	}
}

function remove(cTodo) {
	return dispatch => {
		todoService.remove(cTodo).then((todo) => {
			dispatch({
				type: DELETE_TODO,
				todo
			});
		}).catch((error) => {
			dispatch({
				type: TODO_FAILURE,
				message: error.message
			});
			dispatch(alertActions.error(error.message));
		});
	}
}

function edit(todo, title) {
	return async dispatch => {
		todoService.edit(todo, title).then((nTodo) => {
			dispatch({
				type: TODO_UPDATE,
				todo: nTodo
			});
		}).catch((error) => {
			dispatch({
				type: TODO_FAILURE,
				message: error.message
			});
			dispatch(alertActions.error(error.message));
		});
	}
}