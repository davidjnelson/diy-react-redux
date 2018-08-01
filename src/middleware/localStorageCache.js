/* @flow */

import type { Action } from '../utility/types';
import type { Store } from 'redux';

export const localStorageCache = (store: Store) => (next: (action: Action) => mixed) => (action: Action) => {
  const result = next(action);

  window.localStorage.setItem('ProjectReduxState', JSON.stringify(store.getState()));

  return result;
};
