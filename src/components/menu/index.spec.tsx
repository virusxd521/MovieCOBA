import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import Menu from './index';
import { MovieProvider } from '../../context';

describe('Menu component', () => {
  it('renders without crashing', () => {
    const tabList = [
      { tabName: 'Tab 1', id: 1 },
      { tabName: 'Tab 2', id: 2 },
      { tabName: 'Tab 3', id: 3 },
    ];

    const menu = render( 
      <MovieProvider>
        <BrowserRouter>
          <Menu tabList={tabList} />  
        </BrowserRouter>
      </MovieProvider>
    );
    expect(menu.container).toBeInTheDocument();
  });
});






