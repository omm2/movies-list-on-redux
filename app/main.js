import React from 'react';
import  ReactDOM from 'react-dom';

import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
//import { createHistory } from 'history'
import createHistory from 'history/lib/createHashHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import reducers from './reducers'

import './sass/main.scss';

import App from './components/app.jsx';
import MovieList from './components/movie_list.jsx';

const history = createHistory()

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const finalCreateStore = compose(
  //applyMiddleware(middleware)
)(createStore);
const store = finalCreateStore(reducer);
syncReduxAndRouter(history, store)

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

