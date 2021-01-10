import { API } from '../const';
import {authHeader} from '../helpers';
import { FINISHED, DELETED, PENDING } from '../const';
import axios from 'axios';

export const todoService = {
	all,
	finished,
	add,
	remove,
	edit
}

function all() {
	return axios.get(API.TODO_LIST, authHeader()).then((response) => response.data);
}

function finished(todo) {
	return axios.put(`${API.TODO_LIST}/${todo.id}`, {
		title: todo.title,
		status: FINISHED
	}, authHeader()).then((response) => response.data);
}

function add(title) {
	return axios.post(`${API.TODO_LIST}`, {
		title
	}, authHeader()).then((response) => response.data);
}

function remove(todo) {
	return axios.put(`${API.TODO_LIST}/${todo.id}`, {
		title: todo.title,
		status: DELETED
	}, authHeader()).then((response) => response.data);
}

function edit(todo, title) {
	return axios.put(`${API.TODO_LIST}/${todo.id}`, {
		title: title,
		status: PENDING
	}, authHeader()).then((response) => response.data);
}