import React from 'react';
import  ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import reducers from './reducers'

import './sass/main.scss';

import Hello from './components/component.jsx';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))
const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Hello}>
        <Route path="foo" component={Hello}/>
        <Route path="bar" component={Hello}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
