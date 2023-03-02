import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieProvider } from '../../context';
import SearchBar from './index';

describe('Check component', () => {
  it('renders without crashing', () => {
    // Need to be removed
    const onCheckMock = jest.fn();

    const check = render( 
      <MovieProvider>
        <SearchBar />
      </MovieProvider>
     );

    expect(check.container).toBeInTheDocument();
  });
});
