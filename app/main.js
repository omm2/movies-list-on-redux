// @flow

import 'babel-polyfill'

import React from 'react';
import  ReactDOM from 'react-dom';

import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
//import { createHistory } from 'history'
import createHistory from 'history/lib/createHashHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import reducers from './reducers'

import './sass/main.scss';

import App from './components/app.jsx';
import MovieList from './containers/movie_list.jsx';

const history = createHistory()

const reducer = combineReducers(Object.assign({}, reducers, {
    routing: routeReducer
}))

const loggerMiddleware = createLogger()
const finalCreateStore = compose(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
))(createStore);
const store = finalCreateStore(reducer);
syncReduxAndRouter(history, store)

//open URL like http://localhost:8080/#/movies/5,3,4
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="movies/:ids" component={MovieList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

