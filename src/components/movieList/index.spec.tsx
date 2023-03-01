import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieProvider } from '../../context';
import MovieList from './index';

describe('MovieList', () => {
  it('renders without crashing', () => {
    const movieList = render(
      <MovieProvider>
        <MovieList genre="action" />
      </MovieProvider>
    );

    expect(movieList.container).toBeInTheDocument();
  });
});
