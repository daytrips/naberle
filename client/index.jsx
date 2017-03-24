import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/App.jsx';
import Signup from './containers/signup.jsx'
import Signin from './containers/signin.jsx'
import Signout from './containers/signout.jsx'
import reducers from './reducers'; // models
import Home from './components/Home.jsx'
import RequireAuth from './containers/requireAuth'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducers)
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <Route path="home" component={RequireAuth(Home)} />
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount'),
);
