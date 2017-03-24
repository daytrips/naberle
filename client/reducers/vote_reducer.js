export default function (state = false, action) {
  switch (action.type) {
    case 'VOTE':
      return action.payload.data.result;
  }
  return state;
}
