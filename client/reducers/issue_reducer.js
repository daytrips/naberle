export default function (state = { data: [] }, action) {
  switch (action.type) {
    case 'GET_ISSUE':
      return action.payload.data;
  }
  return state;
}
