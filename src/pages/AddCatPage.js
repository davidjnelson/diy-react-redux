/* @flow */

import { AddCat } from '../components/AddCat';
import { SimpleRedux } from '../higher_order_components/SimpleRedux';
import type { ProjectReduxState } from '../utility/types';

const AddCatPage = SimpleRedux(AddCat, (state: ProjectReduxState) => {
  return {};
}, dispatch => {
  return {
    addCat: post => dispatch({ type: 'ADD_POST', post}),
    navigateToAllCatsOrderedByDate: () => {
      dispatch({
        type: 'SET_SORT',
        sortBy: 'DATE'
      });

      dispatch({
        type: 'SET_PAGE',
        selectedPage: 'ALL_CATS_PAGE'
      });
    }
  };
});

export { AddCatPage }
