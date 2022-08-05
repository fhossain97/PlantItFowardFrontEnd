import tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_PIF_API_URL}/user`;

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Username already in use! Try again.');
  })
 .then(({token}) => {
  tokenService.setToken(token)
 });
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Credentials Invalid! Try again.');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

const userTokenExports = {
    signup,
    getUser,
    logout,
    login
}

export default userTokenExports