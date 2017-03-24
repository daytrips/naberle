import axios from 'axios';

export function signup(username, password) {
  const request = axios.post('/signup', { username, password });
  return {
    type: 'SIGNUP',
    payload: request,
  };
}

export function signin(username, password) {
  const request = axios.post('/signin', { username, password });
  return {
    type: 'SIGNIN',
    payload: request,
  };
}

export function getIssues() {
  const request = axios.get('/issue');
  return {
    type: 'GET_ISSUE',
    payload: request,
  };
}

export function signout() {
  return {
    type: 'SIGNOUT',
    payload: false,
  };
}

export function postVote(id, username) {
  const request = axios.post('/vote', { id, username });
  return {
    type: 'VOTE',
    payload: request,
  };
}
