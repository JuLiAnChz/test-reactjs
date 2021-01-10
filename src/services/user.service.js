import {API} from '../const';
import {authHeader} from '../helpers';
import axios from 'axios';

export const userService = {
  login,
  logout,
	register,
	all,
	inactiveUsers,
	generateRandomUsers
}

function login(email, password) {
  return axios.post(API.SIGNIN, {
    email, password
  }, {withCredentials: true})
  .then(handleResponse).then((response) => {
    return response;
  });
}

function logout() {
  localStorage.removeItem('cUser');
}

function register(nUser) {
  return axios.post(API.SIGNUP, {
    name: nUser.name,
    email: nUser.email,
    password: nUser.password,
    password_confirmation: nUser.password_confirmation
  }, authHeader()).then((response) => {
    const user = response.data;
    localStorage.setItem('cUser', JSON.stringify(user))
    return response;
  });
}

function handleResponse(response) {
  const cUser = response.data;
  localStorage.setItem('cUser', JSON.stringify(cUser));
  return response.data;
}

function all() {
	return axios.get(API.USERS, authHeader()).then((response) => response.data);
}

function inactiveUsers(users) {
	const usersId = users.map((u) => u.id);
	return axios.put(API.INACTIVE_USERS, {
		users: usersId
	}, authHeader()).then((response) => response.data);
}

function generateRandomUsers() {
	return axios.post(API.RANDOM_USERS, {}, authHeader()).then((response) => response.data);
}