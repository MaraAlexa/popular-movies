import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { IMG_URL } from '../constants';

import Modal from 'react-modal';
import '../../src/App.css';

// components
import Player from './Player';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faStar, faTimes);

Modal.setAppElement('#root');

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { item } = props.location;

    this.state = {
      modalIsOpen: false,
      item: localStorage.getItem('item')
        ? JSON.parse(localStorage.getItem('item'))
        : item
    };
  }

  componentDidMount() {
    // Remember state for the next mount
    localStorage.setItem('item', JSON.stringify(this.state.item));
  }

  componentWillUnmount() {
    localStorage.clear();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel='Player Modal'
        >
          <div className='modal-header'>
            <h2 className='modal-title'>
              {item.original_name || item.original_title}
            </h2>
            <div className='close-button-wrapper'>
              <button className='close-button' onClick={this.closeModal}>
                <FontAwesomeIcon icon='times' />
              </button>
            </div>
          </div>

          <Player posterPath={item.poster_path} />
        </Modal>

        <div className='movie_wrapper'>
          <div className='movie-details'>
            <h1 className='movie_title'>
              {item.original_name || item.original_title}
            </h1>
            <p className='overview'>{item.overview}</p>

            <div className='metadata'>
              <p className='release_date'>Release date: {item.release_date}</p>
              <p className='vote_average'>
                Stars:
                <span className='star-icon'>
                  <FontAwesomeIcon icon='star' />
                </span>
                {item.vote_average}
              </p>
            </div>
            <div className='button_wrapper'>
              <button className='play_button' onClick={this.openModal}>
                Watch Movie
              </button>
            </div>
          </div>

          <div className='image_wrapper'>
            <img
              className='poster'
              src={`${IMG_URL}${item.poster_path}`}
              alt='movie poster'
            />
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {};

export default MovieDetails;
