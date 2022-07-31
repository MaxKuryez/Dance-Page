import React from 'react';
import ReactDOM from 'react-dom';
import Gnav from './components/gnav/gnav_menu';
import Footer from './components/footer/footer.js';
import Routs from './view/routs.js';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Gnav/>
    <Routs/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
