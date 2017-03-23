import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
console.log('browserHistory', browserHistory)
import App from './components/App.jsx';
import reducers from './reducers'; // models

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(
  combineReducers({
    reducers,
    routing: routerReducer
  })
)

console.log(reducers)
// const store = applyMiddleware(ReduxPromise)(createStore)(reducers);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('mount'),
);
