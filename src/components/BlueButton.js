/* @flow */

import React from 'react';
import './BlueButton.css'
import PropTypes from "prop-types";

const BlueButton = (props: {
  text: string
}) => {
  return (
    <div
      style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <button
        className={'Project__BlueButton'}>
        {props.text}
      </button>
    </div>
  );
};

BlueButton.propTypes = {
  text: PropTypes.string.isRequired
};

export { BlueButton }
