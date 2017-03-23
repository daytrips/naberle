import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import signupReducer from './signup_reducer';

const reducer = combineReducers({
  signedUp: signupReducer,
  routing: routerReducer,
});

export default reducer;
