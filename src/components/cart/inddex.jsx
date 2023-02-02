import React, { useEffect } from 'react';
import './style.css';

const Cart = ({count}) => {

  return (
    <p className="cart">Movies' counter: {count}</p>
  )
};

export default Cart;