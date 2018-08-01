/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import type { ComponentWithStoreProp, ComponentWithAnyProps, Action, ProjectReduxState } from '../utility/types';
import type { Store } from 'redux';

/**
 In production, always use react-redux because of its great performance optimizations, tests, and edge case handling.

 This is a fun higher order component to integrate redux in a simple way, since the instructions mentioned not using
 any third party react components and I like the redux architecture.

 I kept it simple by passing the store manually to each container component instead of using the Context API.

 * @param WrappedComponent A presentation or container component that relies on props to get data and dispatch events.
 * @param getStateFromStoreSelector A function with a single argument of state which is the redux state atom object, that
 * describes how to get the props and state the composed component needs.
 * @param getDispatchers A function with a single argument of dispatch which is the dispatch function for the store
 * the app is using, which describes how to get the dispatchers.
 * @returns {{propTypes, new(*=): WrapperComponent}} A class which integrates redux via subscribing and unsubscribing
 * to the redux store, and calling setState when new data is received from redux via the subscription.  The wrapped
 * class gets the props and dispatchers as specified in the getStateFromStoreSelector and getDispatchers functions.
 * @constructor
 */
export function SimpleRedux(WrappedComponent: ComponentWithStoreProp,
                            getStateFromStoreSelector: (state: ProjectReduxState) => Object,
                            getDispatchers?: (dispatch: (action: Action) => Object) => Object): ComponentWithStoreProp {
  if(!getStateFromStoreSelector) {
    throw new Error("The required second argument getStateFromStoreSelector was missing to SimpleRedux.");
  }

  class WrapperComponent extends React.Component<
    {
      store: Store
    },
    any> {
    unsubscribeStore: () => void;

    constructor(props: {
                  store: Store
                }) {
      super(props);

      this.state = getStateFromStoreSelector(props.store.getState());
    }

    render(): ComponentWithAnyProps {
      const postSelectorStateForProps = {...getStateFromStoreSelector(this.props.store.getState())};
      const dispatchersForProps = getDispatchers ? {...getDispatchers(this.props.store.dispatch)} : null;

      // some, not all, wrapped components need the store, to pass it to child container components.
      // an example that needs it is PageSelectorContainer
      return <WrappedComponent store={this.props.store} {...postSelectorStateForProps} {...dispatchersForProps} />;
    }

    setComponentStateFromSelector = () => {
      this.setState(getStateFromStoreSelector(this.props.store.getState()));
    };

    componentDidMount = () => {
      this.unsubscribeStore = this.props.store.subscribe(this.setComponentStateFromSelector);
    };

    componentWillUnmount = () => {
      this.unsubscribeStore();
    }
  }

  WrapperComponent.propTypes = {
    store: PropTypes.object.isRequired
  };

  return WrapperComponent;
}
