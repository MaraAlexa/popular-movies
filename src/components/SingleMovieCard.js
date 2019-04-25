import React from 'react';
import PropTypes from 'prop-types';
import '../../src/App.css';

const SingleMovieCard = ({ imageUrl, movieTitle }) => {
  return (
    <div className='movie-card'>
      <img className='card-image' src={imageUrl} alt='movie poster' />
      <h3 className='movie-title'>{movieTitle}</h3>
    </div>
  );
};

SingleMovieCard.propTypes = {
  imageUrl: PropTypes.string,
  movieTitle: PropTypes.string
};

export default SingleMovieCard;
