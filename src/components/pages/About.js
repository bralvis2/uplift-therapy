import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutBanner from '../site-images/about-cover.png';
import Owner from '../site-images/owner.png';
import CheckMark from '../SVG-icons/check-mark.svg'
import ImgA from '../site-images/about-img-a.png'
import DecorIconL from '../site-images/decor-icon-light.png'
import DecorIcon from '../site-images/decor-icon.png'

// Style Sheet
import './About.css'

class About extends Component {
  render() {
    return (
      <div className='about'>
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

          <div className='about-section-3'>
            <h2>HOW I CAN HELP</h2>
            <div className='about-section-3-container'>
              <div className='about-section-3-image'>
                <img src={ImgA} alt=''/>
              </div>
              <div className='about-section-3-content'>
                <div className='about-section-3-cards'>
                  <img src={DecorIconL} alt=''/>
                  <h3>EXPERTISE</h3>
                  <p>My clinical experience and continuing education through conferences and workshops enables 
                    me to provide evidence-based treatments and interventions, tailored to clients' unique needs 
                    and goals.</p>
                </div>
                <div className='about-section-3-cards'>
                  <img src={DecorIconL} alt=''/>
                  <h3>EXCEPTIONAL COMMUNICATION</h3>
                  <p>I strive to have exceptional communication skills with my clients. I believe that clear and 
                    effective communication is key to building a strong therapeutic relationship and helping my 
                    clients achieve their goals.</p>
                </div>
                <div className='about-section-3-cards'>
                  <img src={DecorIconL} alt=''/>
                  <h3>SUPPORT</h3>
                  <p>My role is to provide a safe and supportive space for my clients to explore their thoughts and 
                    feelings without fear of judgment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='experience'>
            <h2>CLINICAL EXPERIENCE</h2>
            <div className='experience-container'>
              <div className='experience-content'>
                <img src={CheckMark} alt='check mark icon'/>
                <h3>UPLIFT THERAPY</h3>
                <p>Individualized mental health treatment for clients</p>
              </div>
              <div className='experience-content'>
                <img src={CheckMark} alt='check mark icon'/>
                <h3>Generation Hope Family Counseling & Consulting, LLC</h3>
                <p>Mental health services for adults and families.</p>
              </div>
              <div className='experience-content'>
                <img src={CheckMark} alt='check mark icon'/>
                <h3>HopeSpoke</h3>
                <p>Mental health services for children and families.</p>
              </div>
            </div>
            <div className='qualifications-container'>
              <div className='q-cards'>
                <h2>LICENSE</h2>
                <div className='q-card-content'>
                  <img src={CheckMark} alt='check mark icon'/>
                  <h4>Mental Health Practictioner</h4>
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
                <div className='q-card-content'>
                  <img src={CheckMark} alt='check mark icon'/>
                  <div>
                    <h4>BACHELOR OF ARTS</h4>
                    <p>UNIVERSITY OF NEBRASKA, LINCOLN NE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className='about-contact-section'>
                <div className='about-contact-content'>
                  <h2>ARE YOU READY TO BEGIN YOUR JOURNEY TOWARDS HEALING?</h2>
                  <img src={DecorIcon} alt=''/>
                  <Link to={'/contact'}>
                        SEND US AN INQUIRY
                  </Link>
                </div>
            </div>
        </div>
    );
  }
}

export default About;