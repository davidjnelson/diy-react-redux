/* @flow */

import { getCatPage } from './CatPage';
import { catsSortComparator } from '../utility/sortComparators';

const AdoptedCatsPage = getCatPage((posts, sortBy) => [].concat(posts).filter(post => post.saved).sort(catsSortComparator(sortBy)));

export { AdoptedCatsPage }
