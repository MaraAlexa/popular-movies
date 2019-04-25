import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import HomePage from './screens/HomePage';
import MovieDetails from './components/MovieDetails';
import Search from './screens/Search';

export const Routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/detail/:movie_id' component={MovieDetails} />
    <Route path='/search' render={() => <Search />} />
    <Route render={() => <h1>Page not found</h1>} />
  </Switch>
);
