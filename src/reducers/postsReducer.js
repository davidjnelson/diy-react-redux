/* @flow */

import Immutable from 'seamless-immutable';
import type { Action, Post } from '../utility/types';

// freeze the results of the reducer to enforce immutability when in dev mode to prevent bugs.
// seamless immutable is not as good for performance as immutable.js for large data sets because
// it doesn't use structural sharing, but its es6 compatibile api makes it very easy to use.
// mutation attempts in dev mode will throw.
const postsReducer = (state: {
                      message?: string,
                      posts: Array<Post>
                    } = Immutable({
                         message: 'Loading...',
                         posts: []
                       }), action: Action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return Immutable.merge(state, {
        message: action.message
      });
    case 'HYDRATE_POSTS':
      return Immutable({
        posts: action.posts,
      });
    case 'ADD_POST':
      return Immutable({
        posts: state.posts.concat(action.post)
      });
    case 'SAVE_POST_TOGGLE':
      return Immutable.merge(state, {
        posts: state.posts.map(post => {
          if(action.id === post.id) {
            return {...post, saved: !post.saved };
          }

          return post;
        })
      });
    default:
      return state;
  }
};

export { postsReducer }
