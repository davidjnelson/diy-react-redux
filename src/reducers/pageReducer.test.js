/* @flow */

import { pageReducer } from './pageReducer';

describe('Page Reducer', () => {
  describe('SET_PAGE action', () => {
    it('sets the selectedPage', () => {
      expect(pageReducer(undefined, {
        type: 'SET_PAGE',
        selectedPage: 'test'
      })).toEqual({
        selectedPage: 'test',
        sortBy: 'UPVOTES'
      });
    });
  });

  describe('SET_SORT action', () => {
    it('sets the sortType', () => {
      expect(pageReducer(undefined, {
        type: 'SET_SORT',
        sortBy: 'test'
      })).toEqual({
        sortBy: 'test',
        selectedPage: 'ALL_CATS_PAGE'
      });
    });
  });
});
