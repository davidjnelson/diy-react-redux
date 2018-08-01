/* @flow */

import React from 'react';
import PropTypes from "prop-types";
import type { StandardDomEvent } from '../utility/types';

const renderImageRadioInputs = props => {
  return props.images.map(image => {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        key={image.value}>
        <input
          style={{
            marginRight: '5%'
          }}
          type={'radio'}
          name={'imageUrl'}
          onChange={image.onFormFieldChange}
          value={image.url}
          checked={image.checked}
          required />
        <img src={image.url} alt={''} />
      </div>
    )
  });
};

const ImageRadioInputGroup = (props: {
  images: Array<{
    value: string,
    onFormFieldChange: StandardDomEvent,
    url: string,
    checked: bool
  }>}) => {
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    {renderImageRadioInputs(props)}
  </div>
};

ImageRadioInputGroup.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    onFormFieldChange: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  })).isRequired
};

export { ImageRadioInputGroup }
