/* @flow */

import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { pageReducer } from './pageReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  page: pageReducer
});

export { rootReducer }
