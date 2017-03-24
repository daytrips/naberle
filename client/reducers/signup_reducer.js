export default function (state = false, action) {
  switch (action.type) {
    case 'SIGNUP':
      if (action.payload.data) {
        return { error: null, authenticated: true, username: action.payload.config.data.username };
      }
      if (action.payload.response) {
        return { error: action.payload.response.data.error, authenticated: false };
      }
      break;
  }
  return state;
}
