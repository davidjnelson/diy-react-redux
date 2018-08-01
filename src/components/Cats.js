/* @flow */

import React from 'react'
import { CatCard } from './CatCard';
import PropTypes from "prop-types";
import type { Post, StandardDomEvent } from '../utility/types';

const Cats = ({
  posts,
  message,
  handlePinIconClick
} : {
  posts: Array<Post>,
  message: string,
  handlePinIconClick: StandardDomEvent
}) => {
  return message ?
    <div style={{
      marginTop: '25%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }}>
      {message}
    </div> :
    <div style={{
      width: '100%'
    }}>
      {posts.map((post) => {
        return <CatCard key={post.id} post={post} handlePinIconClick={handlePinIconClick} />
      })}
    </div>
};

Cats.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired).isRequired,
  message: PropTypes.string
};

export { Cats }
