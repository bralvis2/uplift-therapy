import React, { Component } from 'react';
import AboutBanner from '../site-images/about-cover.png';
import Owner from '../site-images/owner.png';

// Style Sheet
import './About.css'

class About extends Component {
  render() {
    return (
        <div>
           <div className='about-cover'>
            <div className='about-page-image'>
              <img src={AboutBanner} alt='Tall Grass in wind'/>
            </div>
            <div className='about-title'>
              <h2>ABOUT</h2>
            </div>
          </div>
          <div className='about-therapist'>
            <div className='about-therapist-content'>
              <h2>MEET THE THERAPIST</h2>
              <h3>Rosi Torres, MS, LMHP</h3>
              <p className='about-therapist-text'>"As a therapist, witnessing my clients overcome their struggles and transform their lives 
                is not just my job, it's my passion and the ultimate reward of my work. I firmly believe people 
                have the ability to change at any time and reach their self-actualization. Psychotherapy is about 
                gaining insight to undo patterns that previously served a purpose, but now are getting you stuck 
                in life.  My commitment is to meet you where you are and help guide you to reach your therapy goals.</p>
            </div>
            <div className='about-therapist-image'>
              <img src={Owner} alt='Rosi Torres, MS, LMHP'/>
            </div>
          </div>
        </div>
    );
  }
}

export default About;