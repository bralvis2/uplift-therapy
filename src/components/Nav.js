import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About.js';
import Couples from './pages/Couples';
import Individuals from './pages/Individuals';
import Costs from './pages/Costs';
import Contact from './pages/Contact';

import logo from '../brand-images/uplift-logo-light.png'

// Style Sheet
import './Nav.css'

const Nav = () => {

    const[isMobile, setIsMobile] = useState(false);

    return (
        <Router>
              <nav className='navbar'>
                <div className='logo-item'>
                  <Link to={'/'}>
                      <img src={logo} width={'400px'} alt='Uplift Therapy, Lincoln, Nebraska'/>
                  </Link>
                </div>
                <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setIsMobile(false)}>

                  <li><Link to={'/about'}>About</Link></li>
                  <li><Link to={'/couples'}> Couples </Link></li>
                  <li><Link to={'/individuals'}>Individuals</Link></li>
                  <li><Link to={'/costs'}>Costs</Link></li>
                  <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
                <button className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}>
                  {isMobile ? <i className='fa fa-xmark'>&#10005;</i> : <i className='fa fa-bars'></i> } 
                </button>
              </nav>
            <hr />
            
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/about" element={<About/>} exact />
                <Route path="/couples" element={<Couples/>} exact />
                <Route path="/individuals" element={<Individuals/>} exact />
                <Route path="/costs" element={<Costs/>} exact />
                <Route path="/contact" element={<Contact/>} exact />
            </Routes>
        </Router>
      );

}


export default Nav;
