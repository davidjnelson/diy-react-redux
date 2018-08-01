/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { SimpleRedux } from '../higher_order_components/SimpleRedux';
import { AllCatsPage } from '../pages/AllCatsPage';
import { AdoptedCatsPage } from '../pages/AdoptedCatsPage';
import { AnimalShelterPage } from '../pages/AnimalShelterPage';
import { AddCatPage } from '../pages/AddCatPage';
import type { Store } from 'redux';
import type { ProjectReduxState } from '../utility/types';

const selectPage = (page, store) => {
  switch(page) {
    case 'ADOPTED_CATS_PAGE':
      return <AdoptedCatsPage store={store} />;
    case 'ANIMAL_SHELTER_PAGE':
      return <AnimalShelterPage store={store} />;
    case 'ADD_CAT_PAGE':
      return <AddCatPage store={store} />;
    case 'ALL_CATS_PAGE':
    default:
      return <AllCatsPage store={store} />;
  }
};

// a simple collection of pages which can be navigated to.
//
// no url changes as mentioned in the instructions
class PageSelector extends React.Component<{
  selectedPage: string,
  store: Store
}> {
  render() {
    return <div>{selectPage(this.props.selectedPage, this.props.store)}</div>;
  }
}

PageSelector.propTypes = {
  store: PropTypes.object.isRequired
};

const PageSelectorContainer = SimpleRedux(PageSelector, (state: ProjectReduxState) => {
  return {
    selectedPage: state.page.selectedPage
  }
});

export { PageSelectorContainer }
