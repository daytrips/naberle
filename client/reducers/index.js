import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import signupReducer from './signup_reducer';
import signinReducer from './signin_reducer';
import issueReducer from './issue_reducer';
import voteReducer from './vote_reducer';


const reducer = combineReducers({
  signedIn: signinReducer,
  signedUp: signupReducer,
  routing: routerReducer,
  signout: signinReducer,
  data: issueReducer,
  vote: voteReducer,
});

export default reducer;
