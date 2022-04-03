import React from 'react';
import ReactDOM from 'react-dom';
import Gnav from './components/gnav/gnav_menu';
import HomePage from './components/homepage/homepage.js';
import Footer from './components/footer/footer.js';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Gnav />
    <HomePage/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
