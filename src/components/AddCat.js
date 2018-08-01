/* @flow */

import React from 'react';
import { ImageRadioInputGroup } from './ImageRadioInputGroup';
import { BlueButton } from './BlueButton';
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import type { Post, StandardDomEvent } from '../utility/types';

export type AddCatProps = {
  addCat: (cat: Post) => void,
  navigateToAllCatsOrderedByDate: () => void
};

export class AddCat extends React.Component<AddCatProps, {
  postTitle: string,
  imageUrl: string,
  adopt: bool
}> {
  static propTypes = {
    addCat: PropTypes.func.isRequired,
    navigateToAllCatsOrderedByDate: PropTypes.func.isRequired
  };

  constructor(props: AddCatProps) {
    super(props);

    this.state = {
      postTitle: '',
      imageUrl: '',
      adopt: true
    };
    this.submitIfEnter = this.submitIfEnter.bind(this);
  }

  onFormFieldChange = (event: StandardDomEvent) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event: StandardDomEvent) => {
    event.preventDefault();

    this.props.addCat({
      id: uuidv4(),
      title: this.state.postTitle,
      thumbnail: this.state.imageUrl,
      link: this.state.imageUrl,
      upvotes: Math.floor(Math.random() * Math.floor(20000)),
      createdEpochSeconds: moment.utc().unix(),
      saved: this.state.adopt.toString() === 'true'
    });

    this.props.navigateToAllCatsOrderedByDate();
  };

  submitIfEnter = (event: SyntheticKeyboardEvent<EventTarget>): void => {
    if(event.keyCode === 13) {
      this.handleSubmit(event);
    }
  };

  render() {
    return <form style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: '4rem'
    }}
      onSubmit={this.handleSubmit}
      onKeyPress={this.submitIfEnter}
      >
      <div style={{
        width: '50%'
      }}>
        <div style={{
          marginBottom: '1%'
        }}>
          Title
        </div>

        <input
          style={{
            fontSize: '4rem',
            width: '100%'
          }}
          value={this.state.postTitle} name={'postTitle'} onChange={this.onFormFieldChange} required/>

        <div style={{
          marginTop: '5%',
          marginBottom: '1%'
        }}>
          Image
        </div>

        <ImageRadioInputGroup images = {[
          {
            value: 'image1',
            url: 'https://b.thumbs.redditmedia.com/YP42rjzlrMR-1uOj1M3BLLcYwYBYJ6-KjCWTNsx1fuc.jpg',
            onFormFieldChange: this.onFormFieldChange,
            checked: this.state.imageUrl === 'https://b.thumbs.redditmedia.com/YP42rjzlrMR-1uOj1M3BLLcYwYBYJ6-KjCWTNsx1fuc.jpg'
          },
          {
            value: 'image2',
            url: 'https://b.thumbs.redditmedia.com/JbCCWxEFK77HJm04qItn5CAXzFdmDSk82X0WN61fbqY.jpg',
            onFormFieldChange: this.onFormFieldChange,
            checked: this.state.imageUrl === 'https://b.thumbs.redditmedia.com/JbCCWxEFK77HJm04qItn5CAXzFdmDSk82X0WN61fbqY.jpg'
          },
          {
            value: 'image3',
            url: 'https://b.thumbs.redditmedia.com/is6DdsIQLR990jPA76hLei_6fZAcwH7Cxivtn5zEi_s.jpg',
            onFormFieldChange: this.onFormFieldChange,
            checked: this.state.imageUrl === 'https://b.thumbs.redditmedia.com/is6DdsIQLR990jPA76hLei_6fZAcwH7Cxivtn5zEi_s.jpg'
          }
        ]} />

        <div style={{
          marginTop: '5%',
          marginBottom: '1%'
        }}>
          Adopt Cat?
        </div>

        <select
          style={{
            fontSize: '4rem',
            width: '100%'
          }}
          name={'adopt'}
          onChange={this.onFormFieldChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>

        <BlueButton text={'Add Cat'}/>
      </div>
    </form>
  }
}
