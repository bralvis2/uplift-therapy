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
              <li className='email'>
                <a href="mailto:rtorresmft@gmail.com">
                rtorresmft@gmail.com
                </a>
              </li>
              <li>(402) 202-9057</li>
              <li>4435 O Street Suite #212-B</li>
              <li>Lincoln, NE 68510</li>
            </ul>
          </div>
          <div className='footer-logo'>
            <Link to={'/'}>
              <img src={FooterLogo} alt='Uplift Therapy Logo'/>
            </Link>
            <div className='socials'>
              <h3>FOLLOW US</h3>
              <a href='https://www.facebook.com/UpliftTherapy' target="_blank" rel="noreferrer">
                  <div className='social-icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 
                                  0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"></path>
                      </svg>
                  </div>
                </a>
            </div>
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