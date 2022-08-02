import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './homepage/homepage.js';
import AboutUsPage from './about_us/about_us.js';
import NotFoundPage from './not_found/not_found.js';
import ContactUsPage from './contact_us/contact_us.js';
import CataloguePage from './catalogue/catalogue.js';
import ProcessPage from './process/process.js'

export default function Routs() {
  return (
    <Router>
        <Routes>
          <Route path='/about-me' element={<AboutUs />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/contact-me' element={<ContactUs />} />
          <Route path='/process' element={<Process />} />
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

function ContactUs() {
  return (
    <ContactUsPage/>
  );
}

function Catalogue() {
  return (
    <div>
      <CataloguePage/>
    </div>
  );
}

function Process() {
  return (
    <div>
      <ProcessPage/>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <NotFoundPage/>
    </div>
  );
}
