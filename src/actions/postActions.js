/* @flow */

import axios from "axios/index";
import { getBaseUrl } from "../configuration/configuration";
import { createActionCreator } from './actionCreators';
import type { Action, Post, ProjectReduxState } from '../utility/types';

// plain es6 is simpler to read than the normalizr dsl for many use cases
export const normalizePosts = (response: any): Array<Post> => {
  return response.data.data.children.map(({data}) => {
    return {
      id: data.id,
      title: data.title,
      thumbnail: data.thumbnail,
      link: getBaseUrl() + data.permalink,
      upvotes: data.ups,
      createdEpochSeconds: data.created_utc,
      saved: false
    };
  });
};

export const dedupePostsByUrl = (postsFromLocalStorage: Array<Post>, postsFromReddit: Array<Post>): Array<Post> => {
  const postFromLocalStorageMap = new Map();
  const dedupedPostsFromReddit = [];

  if(postsFromLocalStorage) {
    postsFromLocalStorage.forEach(postFromLocalStorage => {
      postFromLocalStorageMap.set(postFromLocalStorage.link, postFromLocalStorage);
    });

    postsFromReddit.forEach(postFromReddit => {
      if(!postFromLocalStorageMap.has(postFromReddit.link)) {
        dedupedPostsFromReddit.push(postFromReddit);
      }
    });

    return postsFromLocalStorage.concat(dedupedPostsFromReddit);
  } else {
    return postsFromReddit;
  }
};

export const setMessage = createActionCreator('SET_MESSAGE', 'message');
export const savePost = createActionCreator('SAVE_POST_TOGGLE', 'id');
export const hydratePosts = createActionCreator('HYDRATE_POSTS', 'posts');

export const getPostsFromReddit = () => {
  return async (dispatch: (action: Action) => void, getState: () => ProjectReduxState) => {
    try {
      dispatch(setMessage('Loading...'));

      const response = await axios.get(`${getBaseUrl()}/r/cats/top/.json?limit=20`);

      if (response.status !== 200) {
        dispatch(setMessage('An error occured.  Please refresh the page.'));
        dispatch(hydratePosts([]));
      } else {
        const normalizedPostsFromReddit = normalizePosts(response);
        const hydratedPostsFromLocalStorage = getState().posts.posts;
        const dedupedPosts = dedupePostsByUrl(hydratedPostsFromLocalStorage, normalizedPostsFromReddit);
        dispatch(hydratePosts(dedupedPosts));
      }
    } catch (error) {
      console.error(error);
      dispatch(setMessage('An error occured.  Please refresh the page.'));
      dispatch(hydratePosts([]));
    }
  }
};
