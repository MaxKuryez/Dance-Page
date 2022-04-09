import React from 'react';
import ReactDOM from 'react-dom';
import Gnav from './components/gnav/gnav_menu';
import HomePage from './view/homepage/homepage.js';
import Footer from './components/footer/footer.js';
import Routs from './view/routs.js';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Gnav />
    <Routs/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
