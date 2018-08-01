/* @flow */

import { getCatPage } from './CatPage';
import { catsSortComparator } from '../utility/sortComparators';

const AnimalShelterPage = getCatPage((posts, sortBy) => [].concat(posts).filter(post => !post.saved).sort(catsSortComparator(sortBy)));

export { AnimalShelterPage }
