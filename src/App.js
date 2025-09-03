import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
// import Nav from './components/Nav.js'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Couples from './components/pages/Couples';
import Family from './components/pages/Family';
import Individuals from './components/pages/Individuals';
import Costs from './components/pages/Costs';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'


import logo from './brand-images/uplift-therapy-logo.svg'

import './App.css';
import './components/Nav.css'

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <Router basename='/'>
      <nav className='main-navbar'>
        <div className='logo-item'>
          <Link to={'/'}>
            <img src={logo} width={'400px'} alt='Uplift Therapy, Lincoln, Nebraska' />
          </Link>
        </div>
        <ul className={isMobile ? 'nav-links-mobile' : 'main-nav-links'}
          onClick={() => setIsMobile(false)}>

          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/couples'}> Couples </Link></li>
          <li><Link to={'/family'}> Family </Link></li>
          <li><Link to={'/individuals'}>Individuals</Link></li>
          <li><Link to={'/costs'}>Costs</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <button className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className='fa fa-xmark'>&#10005;</i> : <i className='fa fa-bars'></i>}
        </button>
      </nav>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/couples" element={<Couples />} exact />
        <Route path="/family" element={<Family />} exact />
        <Route path="/individuals" element={<Individuals />} exact />
        <Route path="/costs" element={<Costs />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
      <Footer />
    </Router>
  );

}


export default App;
