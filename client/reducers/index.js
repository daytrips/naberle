import { combineReducers } from 'redux';

const reducer = combineReducers({
  test: (porps = {}) => porps,
  test2: (porps = {}) => porps,
});

export default reducer;
