import React from 'react';
import './style.css';

import camera from './camera.svg';

const Header = () => (
      <h1 className="header">
        <img className="logo" src={camera} alt="Logo" />
        V našem kině právě uvádíme
      </h1>
);

export default Header;