import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';
import { MovieProvider } from '../../context';

describe('Header component', () => {
  it('renders without crashing', () => {
    const header = render( 
      <MovieProvider>
        <Header />   
      </MovieProvider>
      );
    expect(header.container).toBeInTheDocument();
  });
});
