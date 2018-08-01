/* @flow */

import React from 'react';
import PropTypes from 'prop-types'
import type { StandardDomEvent } from '../utility/types';

const Navigation = (props: {
  selectedPage: string,
  sortBy: string,
  setPageDispatch: StandardDomEvent,
  setSort: StandardDomEvent
}) => {
  return (
      <div
          style={{
          position: 'fixed',
          width: '100%',
          top: 0,
          backgroundColor: 'lightgray'
        }}>

        <div style={{
          width: '100%',
          padding: '25px',
          fontSize: '24px',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
          <a href={'All Cats'}
            style={{
              fontSize: props.selectedPage === 'ALL_CATS_PAGE' ? '32px' : '24px'
            }}
            onClick={(event) => props.setPageDispatch(event, 'ALL_CATS_PAGE')}>All Cats</a>
          <a href={'Adopted Cats'}
             style={{
               fontSize: props.selectedPage === 'ADOPTED_CATS_PAGE' ? '32px' : '24px'
             }}
             onClick={(event) => props.setPageDispatch(event, 'ADOPTED_CATS_PAGE')}>Adopted Cats</a>
          <a href={'Animal Shelter'}
             style={{
               fontSize: props.selectedPage === 'ANIMAL_SHELTER_PAGE' ? '32px' : '24px'
             }}
             onClick={(event) => props.setPageDispatch(event, 'ANIMAL_SHELTER_PAGE')}>Animal Shelter</a>
          <a href={'Add Cat'}
             style={{
               fontSize: props.selectedPage === 'ADD_CAT_PAGE' ? '32px' : '24px'
             }}
             onClick={(event) => props.setPageDispatch(event, 'ADD_CAT_PAGE')}>Add Cat</a>
        </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1%',
        marginRight: '40%',
        marginLeft: '40%',
        justifyContent: 'space-evenly'
      }}>
        Sort by

        <a href={'Upvotes'}
           style={{
             fontSize: props.sortBy === 'UPVOTES' ? '20px' : '16px'
           }}
           onClick={(event) => props.setSort(event, 'UPVOTES')}>Upvotes</a>
        <a href={'Date'}
           style={{
             fontSize: props.sortBy === 'DATE' ? '20px' : '16px'
           }}
           onClick={(event) => props.setSort(event, 'DATE')}>Date</a>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  selectedPage: PropTypes.string.isRequired,
  setPageDispatch: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired
};

export { Navigation }
