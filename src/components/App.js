/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { PageSelectorContainer } from '../containers/PageSelectorContainer';
import { NavigationContainer } from '../containers/NavigationContainer';
import type { Store } from 'redux';

const App = (props: {
  store: Store
}) => {
  return (
    <div style={{
      width: '100%'
    }}>
      <NavigationContainer store={props.store} />

      <div style={{
        marginTop: '8%'
      }} />

      <PageSelectorContainer store={props.store} />
    </div>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export { App }
