import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieProvider } from '../../context';
import Check from './index';

describe('Check component', () => {
  it('renders without crashing', () => {
    const onCheckMock = jest.fn();
    const check = render( 
      <MovieProvider>
        <Check title="Test Movie" onCheck={onCheckMock} />
      </MovieProvider>
     );

    expect(check.container).toBeInTheDocument();
  });
});
