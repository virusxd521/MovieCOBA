import React from 'react';
import { render } from 'react-dom';
import './style.css';

import camera from './img/camera.svg';

const App = () => (
  <>
    <h1>
      <img class="logo" src={camera} alt="Logo" />
      V našem kině právě uvádíme
    </h1>
  </>
);

render(<App />, document.querySelector('#app'));
