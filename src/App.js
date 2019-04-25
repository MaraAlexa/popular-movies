/**
 *
 *  App
 *
 *  This component is contains the router of this app
 */

// packages
import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

// styles
import './App.css';

import { Routes } from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='header'>
            <Link to='/'>Home</Link>
            <Link to={{ pathname: '/search' }}>Search</Link>
          </div>

          {Routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
