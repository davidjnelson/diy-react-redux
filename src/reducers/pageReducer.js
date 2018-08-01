/* @flow */

import Immutable from 'seamless-immutable';
import type { Action } from '../utility/types';

// freeze the results of the reducer to enforce immutability when in dev mode to prevent bugs.
// seamless immutable is not as good for performance as immutable.js for large data sets because
// it doesn't use structural sharing, but its es6 compatible api makes it very easy to use.
// mutation attempts in dev mode will throw.
const pageReducer = (state: {
    selectedPage: string,
    sortBy: string
  } = Immutable({
  selectedPage: 'ALL_CATS_PAGE',
  sortBy: 'UPVOTES'
}), action: Action) => {
  switch(action.type) {
    case 'SET_PAGE':
      return Immutable.merge(state, {
        selectedPage: action.selectedPage
      });
    case 'SET_SORT':
      return Immutable.merge(state, {
        sortBy: action.sortBy
      });
    default:
      return state;
  }
};

export { pageReducer }
