import React from 'react';
import './style.css';

import camera from './camera.svg';
import Cart from '../cart/inddex';
import { useMovieCart } from '../../context';

const Header = ({count}) => {
      return(
      <div className="header">
          <h1 className="header--title">
            <img className="logo" src={camera} alt="Logo" />
            Movie renting
          </h1>
          <Cart count={count}/>
      </div>
      );
};

export default Header;