export function authHeader() {
	let user = JSON.parse(localStorage.getItem('cUser'));
  if (user && user.token) {
    return {
			headers: {
				Authorization: `Bearer ${user.token}`
			},
			withCredentials: true
		}
  }
  return {}
}