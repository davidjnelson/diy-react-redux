/* @flow */

import PropTypes from 'prop-types';
import { Cats } from '../components/Cats';
import { SimpleRedux } from '../higher_order_components/SimpleRedux';
import { savePost } from '../actions/postActions';
import { createSelector } from 'reselect';
import type { Post, ProjectReduxState } from '../utility/types';

export const getCatPage = (transformFunction: (posts: Array<Post>, sortBy: string) => Array<Post>) => {
  const postsInputSelector = state => state.posts.posts;
  const sortByInputSelector = state => state.page.sortBy;
  const sortedPostsSelector = createSelector(
    [postsInputSelector, sortByInputSelector],
    transformFunction);

  const CatPage = SimpleRedux(Cats, (state: ProjectReduxState) => {
    return {
      posts: sortedPostsSelector(state),
      message: state.posts.message
    }
  }, dispatch => {
    return {
      handlePinIconClick: event => {
        event.preventDefault();
        dispatch(savePost(event.target.id))
      }
    }
  });

  CatPage.propTypes = {
    store: PropTypes.object.isRequired
  };

  return CatPage;
};
