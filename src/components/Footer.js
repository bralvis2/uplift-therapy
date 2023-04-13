import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../brand-images/icon-light.png'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <div className='footer'>
          <div className='footer-contact'>
            <h3>Rosi Torres, MS, LMHP</h3>
            <ul>
              <li>rtorresmft@gmail.com</li>
              <li>(402) 202-9057</li>
              <li>4435 O Street Suite #212-B</li>
              <li>Lincoln, NE 68510</li>
            </ul>
          </div>
          <div className='footer-logo'>
            <Link to={'/'}>
              <img src={FooterLogo} alt='Uplift Therapy Logo'/>
            </Link>
          </div>
          <div className='footer-nav'>
            <nav>
              <h3>BROWSE</h3>
              <ul className='footer-nav-links'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/couples'}> Couples </Link></li>
                <li><Link to={'/individuals'}>Individuals</Link></li>
                <li><Link to={'/costs'}>Costs</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </nav>
          </div>
          
        </div>
    );
  }
}

export default Footer;