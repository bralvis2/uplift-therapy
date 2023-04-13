import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../brand-images/icon-light.png'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-contact'>
            <h3>Rosi Torres, MS, LMHP</h3>
            <ul>
              <li className='email'>
                <a href="mailto:rtorresmft@gmail.com">
                rtorresmft@gmail.com
                </a>
              </li>
              <li>(402) 202-9057</li>
              <li className='footer-location'>
                <a href='https://www.google.com/maps/place/4435+O+St+212+b,+Lincoln,+NE+68510/@40.8132177,-96.6604739,17z/data=!3m1!4b1!4m5!3m4!1s0x8796bc2eb9e54619:0xc41af7bc89b96a78!8m2!3d40.8132177!4d-96.657899'
                  target='_blank'
                  rel="noreferrer">
                  <div className='location-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M255.5,470a12,12,0,0,1-9.49-4.66c-.36-.46-36.12-46.81-71.38-102.15C126.44,
                      287.57,102,231.61,102,196.88c0-84.64,68.86-153.5,153.5-153.5S409,112.24,409,196.88c0,
                      34.73-24.44,90.69-72.63,166.32-35.26,55.34-71,101.69-71.38,102.15A12,12,0,0,1,255.5,
                      470Zm0-402.63A129.64,129.64,0,0,0,126,196.88C126,217.57,138,261,194.87,350.3c23.81,
                      37.36,47.81,70.51,60.63,87.77,12.85-17.29,36.9-50.52,60.72-87.91C373.07,260.92,385,
                      217.55,385,196.88A129.64,129.64,0,0,0,255.5,67.38Z"></path>
                      <path d="M255.5,262.17a65.29,65.29,0,1,1,65.29-65.29A65.37,65.37,0,0,1,
                      255.5,262.17Zm0-106.58a41.29,41.29,0,1,0,41.29,41.29A41.33,41.33,0,0,0,255.5,155.59Z"></path>
                    </svg>
                  </div>
                  4435 O Street Suite #212-B 
                  <br/>Lincoln, NE 68510
                </a>
              </li>
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
                <li><Link to={'/family'}> Family </Link></li>
                <li><Link to={'/individuals'}>Individuals</Link></li>
                <li><Link to={'/costs'}>Costs</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <p className='copywrite'>&#169; 2023 Uplift Therapy</p>
      </div>
    );
  }
}

export default Footer;