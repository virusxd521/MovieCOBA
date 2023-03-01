import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieProvider } from '../../context';
import Cart from './index';

describe('Cart component', () => {
  it('renders without crashing', () => {
    const state = {
      checkedMovies: {
        movie1: true,
        movie2: false,
        movie3: true,
      }
    };
    
    const cart  = render(
      <MovieProvider>
        <Cart state={state} />
      </MovieProvider>
    );

    expect(cart.container).toBeInTheDocument();
  });
});
