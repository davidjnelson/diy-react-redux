/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { getPostsFromReddit } from './actions/postActions';
import { localStorageCache } from './middleware/localStorageCache';
import { composeWithDevTools } from 'redux-devtools-extension';

const localStorageReduxState = window.localStorage.getItem('ProjectReduxState') ?
  JSON.parse(window.localStorage.getItem('ProjectReduxState')):
  {};

const store = createStore(rootReducer,
  localStorageReduxState,
  composeWithDevTools(
    applyMiddleware(thunk, localStorageCache)
  ));

const rootElement = document.getElementById('root');

if(!rootElement) {
  throw new Error('Could not find root element in index.js');
}

ReactDOM.render(
    <App store={store} />, rootElement
);

store.dispatch(getPostsFromReddit());
