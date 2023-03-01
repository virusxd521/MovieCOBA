import React from 'react';
import './style.css';
import Cart from '../cart';
import { useMovie } from '../../context';

const Header : React.FC = () => {  
  const { state, dispatch } = useMovie();
  
      return(
      <div className="header">
          <h1 className="header--title">
            Movie renting
          </h1>
          <Cart state={state} />
      </div>
      );
};

export default Header;