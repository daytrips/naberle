export default function (state = {
  username: localStorage.getItem('username'),
  authenticated: !!localStorage.getItem('username'),
}, action) {
  switch (action.type) {
    case 'SIGNIN':
      if (action.payload.data) {
        localStorage.setItem('username', action.payload.data[0].username);
        return { error: null, authenticated: true, username: action.payload.data[0].username };
      }
      if (action.payload.response) {
        return { error: action.payload.response.data.error, authenticated: false };
      }
      break;

    case 'SIGNOUT':
      localStorage.removeItem('username');
      return { error: null, authenticated: action.payload, username: '' };
      break;
  }
  return state;
}
