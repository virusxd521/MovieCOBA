import React from 'react';
import { render } from 'react-dom';
import Header from './components/header/index';
import MovieList from './components/movieList/index'

import './style.css';

import movieList from './movies.js';



const App = () => (
  <>
    <Header/>
    <MovieList movies={movieList}/>
  </>
);

render(<App />, document.querySelector('#app'));
