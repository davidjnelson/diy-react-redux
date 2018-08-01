/* @flow */

import { postsReducer } from './postsReducer';

describe('Posts Reducer', () => {
  describe('SET_MESSAGE action', () => {
    it('sets the message', () => {
      expect(postsReducer(undefined, {
        type: 'SET_MESSAGE',
        message: 'test'
      })).toEqual({
        message: 'test',
        posts: []
      });
    });
  });

  describe('HYDRATE_POSTS action', () => {
    it('hydrates the posts', () => {
      expect(postsReducer(undefined, {
        type: 'HYDRATE_POSTS',
        posts: [
          {
            title: 'foo'
          },
          {
            title: 'foo2'
          }
        ]
      })).toEqual({
        posts: [
          {
            title: 'foo'
          },
          {
            title: 'foo2'
          }
        ]
      });
    });
  });

  describe('SAVE_POST_TOGGLE action', () => {
    it('toggles saved for one post', () => {
      const initialState = {
        posts: [
          {
            id: 'foo',
            saved: false,
          },
          {
            id: 'foo2',
            saved: true
          }
        ]
      };

      expect(postsReducer(initialState,
        {
          type: 'SAVE_POST_TOGGLE',
          id: 'foo'
        })).toEqual({
        posts: [
          {
            id: 'foo',
            saved: true
          },
          {
            id: 'foo2',
            saved: true
          }
        ]
      });
    });
  });

  describe('ADD_POST action', () => {
    it('adds a post', () => {
      expect(postsReducer(undefined, {
        type: 'ADD_POST',
        post: {
          id: 1,
          title: 'title',
          thumbnail: 'thumbnail',
          link: 'link',
          upvotes: 100,
          createdEpochSeconds: 12345,
          saved: true
        }
      })).toEqual({
        posts: [
          {
            id: 1,
            title: 'title',
            thumbnail: 'thumbnail',
            link: 'link',
            upvotes: 100,
            createdEpochSeconds: 12345,
            saved: true
          }
        ]
      });
    });
  });
});
