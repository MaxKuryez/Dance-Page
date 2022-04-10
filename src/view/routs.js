import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import HomePage from './homepage/homepage.js';

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
     <p>About placeholder</p>
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
