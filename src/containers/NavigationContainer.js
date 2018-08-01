/* @flow */

import PropTypes from "prop-types";
import { SimpleRedux } from '../higher_order_components/SimpleRedux';
import { Navigation } from '../components/Navigation';
import type { ProjectReduxState } from '../utility/types';

const NavigationContainer = SimpleRedux(Navigation, (state: ProjectReduxState) => {
  return {
    selectedPage: state.page.selectedPage,
    sortBy: state.page.sortBy
  }
}, dispatch => {
  return {
    setPageDispatch: (event, selectedPage) => {
      event.preventDefault();

      dispatch({
        type: 'SET_PAGE',
        selectedPage
      });
    },
    setSort: (event, sortBy) => {
      event.preventDefault();

      dispatch({
        type: 'SET_SORT',
        sortBy
      });
    }
  };
});

NavigationContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export { NavigationContainer }
