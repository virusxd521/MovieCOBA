import React from 'react';
import './style.css';

interface CartProps {
  state: {
    checkedMovies: Record<string, boolean>;
  };
};

const Cart: React.FC<CartProps> = ({ state }) => {
  const checkedMovieValues = Object.values(state.checkedMovies);
  const checkedCount = checkedMovieValues.filter(value => value).length;

  return (
    <p className="cart">Movies' counter: {checkedCount}</p>
  );
};

export default Cart;
