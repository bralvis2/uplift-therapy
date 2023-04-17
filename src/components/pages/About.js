import React, { Component } from 'react';
import AboutBanner from '../site-images/about-cover.png';
import Owner from '../site-images/owner.png';
import CheckMark from '../SVG-icons/check-mark.svg'

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
              <p>"As a therapist, witnessing my clients overcome their struggles and transform their lives 
                is not just my job, it's my passion and the ultimate reward of my work. I firmly believe people 
                have the ability to change at any time and reach their self-actualization. Psychotherapy is about 
                gaining insight to undo patterns that previously served a purpose, but now are getting you stuck 
                in life.  My commitment is to meet you where you are and help guide you to reach your therapy goals.</p>
            </div>
            <div className='about-therapist-image'>
              <img src={Owner} alt='Rosi Torres, MS, LMHP'/>
            </div>
          </div>
          <div className='experience'>
            <h2>CLINICAL EXPERIENCE</h2>
            <div className='experience-container'>
              <div className='experience-content'>
                <img src={CheckMark} alt='check mark icon'/>
                <h3>PRIVATE PRACTICE</h3>
                <p>Individualized mental health treatment for clients</p>
              </div>
              <div className='experience-content'>
                <img src={CheckMark} alt='check mark icon'/>
                <h3>PRIVATE PRACTICE #2</h3>
                <p>Mental health services for adults and families.</p>
              </div>
              <div className='experience-content'>
                <img src={CheckMark} alt='check mark icon'/>
                <h3>SCHOOL THERAPIST</h3>
                <p>Mental health services for children and families.</p>
              </div>
            </div>
            <div className='qualifications-container'>
              <div className='q-cards'>
                <h2>LICENSE</h2>
                <div className='q-card-content'>
                  <img src={CheckMark} alt='check mark icon'/>
                  <h4>Health Practictioner</h4>
                </div>
              </div>
              <div className='q-cards'>
                <h2>EDUCATION</h2>
                <div className='q-card-content'>
                  <img src={CheckMark} alt='check mark icon'/>
                  <div>
                    <h4>MASTER OF THERAPY</h4>
                    <p>UNIVERSITY OF NEBRASKA, LINCOLN NE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;