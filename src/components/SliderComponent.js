// packages
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// components
import Slider from 'react-slick';
import SingleMovieCard from './SingleMovieCard';

import { IMG_URL } from '../constants';

// styles
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../App.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class SliderComponent extends Component {
  handleCardClick = item => {
    this.props.history.push({
      pathname: '/detail/' + item.id,
      item
    });
  };

  render() {
    const items = this.props.data.map(item => {
      return (
        <div key={item.id} className="movie-card">
          <div onClick={() => this.handleCardClick(item)}>
            <SingleMovieCard movieTitle={item.original_name || item.original_title} imageUrl={`${IMG_URL}${item.poster_path}`} />
          </div>
        </div>
      );
    });
    return <Slider {...settings}>{items}</Slider>;
  }
}

export default withRouter(SliderComponent);
