import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Search from '../src/screens/Search';
import SliderComponent from '../src/components/SliderComponent';

it('renders without crashing Shallow', () => {
  shallow(<App />);
});

describe('Clear Button functionality', () => {
  it('should verify that the clear button resets the query state', () => {
    const query = 'test';

    const searchComponent = mount(<Search />);

    searchComponent.setState({ query: query });

    // simulate the click on ClearButton
    searchComponent.find('button.clear-button').simulate('click');

    // expect the query state to be an empty string
    expect(searchComponent.find('input').props().value).toBe('');
  });
});

describe('That the SliderComponent renders ', () => {
  it('verifies number of results', () => {
    // mock data
    const items = [
      {
        id: 1,
        title: 'Avengers: Endgame',
        poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
      },
      {
        id: 2,
        title: 'Hellboy',
        poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg'
      },
      {
        id: 3,
        title: 'Captain Marvel',
        poster_path: '/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg'
      }
    ];

    const sliderComponent = mount(
      <Router>
        <SliderComponent data={items} />
      </Router>
    );

    // Expect to render exacly 3 slick slides
    expect(sliderComponent.find('.slick-slide').not('.slick-cloned').length).toBe(3);
  });
});
