/* @flow */

import type { Post } from './types';

export const catsSortComparator = (sortBy: string) => (postA: Post, postB: Post) => {
  if(sortBy === 'UPVOTES') {
    return postB.upvotes - postA.upvotes;
  } else if(sortBy === 'DATE') {
    return postB.createdEpochSeconds - postA.createdEpochSeconds;
  } else {
    return 0;
  }
};

