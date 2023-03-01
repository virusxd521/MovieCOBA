import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieProvider } from '../../context';
import Movie from './index';

test('renders movie component', () => {
  const props = {
    id: 1,
    title: 'The Godfather',
    posterURL: 'https://example.com/poster.jpg',
    genre: 'Crime',
    setStorageCheckedMovies: () => console.log('redundant, here only for the test')
  };

  const { getByText, getByAltText } = render( 
    <MovieProvider>
      <Movie {...props} />
    </MovieProvider>
  );
  const movieTitle = getByText(props.title);
  const moviePoster = getByAltText(props.title);

  expect(movieTitle).toBeInTheDocument();
  expect(moviePoster).toBeInTheDocument();
});
