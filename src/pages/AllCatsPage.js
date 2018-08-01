/* @flow */

import { getCatPage } from './CatPage';
import { catsSortComparator } from '../utility/sortComparators';

const AllCatsPage = getCatPage((posts, sortBy) => [].concat(posts).sort(catsSortComparator(sortBy)));

export { AllCatsPage }
