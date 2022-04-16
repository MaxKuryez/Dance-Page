import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './homepage/homepage.js';
import AboutUsPage from './about_us/about_us.js';

export default function Routs() {
  return (
    <Router>
        <Routes>
          <Route path="/about-me" element={<AboutUs />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/catalogue" element={<Products />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  );
}

function AboutUs() {
  return (
    <div>
      <AboutUsPage/>
    </div>
  );
}

function Home() {
  return (
      <HomePage/>
  );
}

function Products() {
  return (
    <div>
     <p>Catalogue placeholder</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <p>NotFound placeholder</p>
    </div>
  );
}
