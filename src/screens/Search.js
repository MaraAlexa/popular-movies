import React, { Component } from 'react';
import '../../src/App.css';
// import PropTypes from 'prop-types';
import getSearchResults from '../api/getSearchResults';

// components
import SliderComponent from '../components/SliderComponent';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes);

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      items: [],
      hasResults: true
    };
  }
  handleInputChange = async e => {
    this.setState({
      query: e.target.value
    });
  };
  handleOnKeyUp = e => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  };
  handleSubmit = async () => {
    if (this.state.query.length > 2) {
      try {
        const response = await getSearchResults(this.state.query);
        if (response.results.length === 0) {
          this.setState({
            hasResults: false,
            items: []
          });
        } else {
          this.setState({
            items: response.results,
            hasResults: true
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleClearInput = () => {
    this.setState({
      query: ''
    });
  };

  render() {
    const { query, items, hasResults } = this.state;

    return (
      <div className="search-bar-page">
        <h2 className="search">SEARCH</h2>
        <div className="search-bar">
          <input
            type="search"
            aria-label="search"
            aria-required
            className="search-input"
            autoFocus
            value={query}
            placeholder="Search..."
            onChange={this.handleInputChange}
            onKeyUp={this.handleOnKeyUp}
          />
          <div className="buttons-wrapper">
            {query.length > 0 && (
              <button className="clear-button" aria-label="cancel" type="button" onClick={this.handleClearInput}>
                <FontAwesomeIcon icon="times" className="times-icon" />
              </button>
            )}
            <button className="input-submit" aria-label="search" type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        {items.length > 0 && <h3 className="search">Search results</h3>}
        {items.length > 0 && <SliderComponent data={items} />}
        {hasResults === false && <h3>No results found!</h3>}
      </div>
    );
  }
}

Search.propTypes = {};

export default Search;
