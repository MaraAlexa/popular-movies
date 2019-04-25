// packages
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// components
import SliderComponent from '../components/SliderComponent';

// api calls
import getPopularByCategory from '../api/getPopularByCategory';
import getPopularByGenre from '../api/getPopularByGenre';

// constants
import { MOVIES, SERIES, DOCUMENTARY_GENRE, FAMILY_GENRE } from '../constants';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularMovies: [],
      popularSeries: [],
      familyMovies: [],
      documentaries: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      let [
        popularMovies,
        popularSeries,
        familyMovies,
        documentaries
      ] = await Promise.all([
        getPopularByCategory(MOVIES),
        getPopularByCategory(SERIES),
        getPopularByGenre(FAMILY_GENRE),
        getPopularByGenre(DOCUMENTARY_GENRE)
      ]);
      this.setState({
        popularMovies: popularMovies.results,
        popularSeries: popularSeries.results,
        familyMovies: familyMovies.results,
        documentaries: documentaries.results,
        isLoading: false
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      popularMovies,
      popularSeries,
      familyMovies,
      documentaries,
      isLoading
    } = this.state;
    if (isLoading) {
      return (
        <div className='app-loader'>
          <img
            src='https://media.giphy.com/media/uyCJt0OOhJBiE/giphy.gif'
            alt='loading spinner'
          />
        </div>
      );
    }
    return (
      <div className='home-page'>
        <h1 className='app-title'>Popular Movies</h1>
        {popularMovies.length > 0 && (
          <h3 className='subtitle'>Popular Movies</h3>
        )}
        <SliderComponent data={popularMovies} />
        {popularSeries.length > 0 && (
          <h3 className='subtitle'>Popular Series</h3>
        )}
        <SliderComponent data={popularSeries} />
        {familyMovies.length > 0 && <h3 className='subtitle'>Family</h3>}
        <SliderComponent data={familyMovies} />
        {documentaries.length > 0 && (
          <h3 className='subtitle'>Documentaries</h3>
        )}
        <SliderComponent data={documentaries} />
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
