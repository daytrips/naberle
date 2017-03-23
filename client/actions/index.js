import axios from 'axios';

export function signup(username, password) {
  const request = axios.post('/signup', { username, password });
  return {
    type: 'SIGNUP',
    payload: request,
  };
}
