import React from 'react';
import ReactDOM from 'react-dom';
import Gnav from './components/gnav/gnav_menu';
import HomePage from './components/homepage/homepage.js';

ReactDOM.render(
  <React.StrictMode>
    <Gnav />
    <HomePage/>
  </React.StrictMode>,
  document.getElementById('root')
);

