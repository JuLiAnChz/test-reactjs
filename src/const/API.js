const API_V1_URL = 'http://localhost:8000/api/v1';

export const API = {
  SIGNIN: `${API_V1_URL}/signin`,
	SIGNUP: `${API_V1_URL}/register`,
	TODO_LIST: `${API_V1_URL}/todo`,
	USERS: `${API_V1_URL}/users`,
	INACTIVE_USERS: `${API_V1_URL}/users/inactive`,
	RANDOM_USERS: `${API_V1_URL}/users/random`,
}