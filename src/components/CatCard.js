/* @flow */

import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import type { Post, StandardDomEvent } from '../utility/types';

const getImage = (url) => {
  if(url) {
    return <img alt="" style={{
      width: '140px',
      minWidth: '140px',
      height: '140px',
      padding: '2%'
    }} src={url} />
  }
};

export type CatCardProps = {
  post: Post,
  handlePinIconClick: StandardDomEvent
};

class CatCard extends React.Component<CatCardProps> {
  render() {
    const {post, handlePinIconClick} = this.props;

    return <div style={{
      backgroundColor: '#fff',
      margin: '2%',
      width: '96%',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: '5px',
      display: 'flex'
    }}>
      <a
        style={{
          marginTop: '2%',
          marginRight: '2%',
          marginBottom: '2%',
          marginLeft: '4%',
          fontSize: '36px',
          color: post.saved ? 'blue' : 'black',
          textDecoration: 'none'
        }}
        href={'Save This Cat'}
        id={post.id}
        onClick={handlePinIconClick}>✔
      </a>
      {getImage(post.thumbnail)}
      <div style={{
        backgroundColor: '#fff',
        padding: '2%',
        borderRadius: '5px'
      }}>
        <div>
          <a href={post.link} target="_blank">
            <h2 style={{
              fontSize: '150%'
            }}>{post.title}</h2>
          </a>
        </div>
        <div>
          {post.upvotes} upvotes
        </div>
        <div>
          {moment.unix(post.createdEpochSeconds).utc(true).fromNow()} UTC
        </div>
      </div>
    </div>
  }

  // does not use state so pass any
  shouldComponentUpdate(nextProps: CatCardProps, nextState: any) {
    return this.props.post !== nextProps.post;
  }
}

CatCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    createdEpochSeconds: PropTypes.number.isRequired,
  }).isRequired,
  handlePinIconClick: PropTypes.func
};

export { CatCard }
