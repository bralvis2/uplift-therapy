import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoverPage from '../site-images/home-cover.png'
import DecorSun from '../site-images/home-decor-icon.png'
import CoupleImg from '../site-images/home-couple.png'
import FamilyImg from '../site-images/home-family.png'
import IndImg from '../site-images/home-individual.png'
import Owner from '../site-images/owner.png'
import DecorIcon from '../site-images/decor-icon.png'
import Testimonials from './Testimonials/Testimonials';

import './Home.css'

class Home extends Component {
  render() {
    return (
        <div className='home'>
          <div className='home-cover'>
            <div className='cover-page-image'>
              <img src={CoverPage} alt='Sun set cover page'/>
            </div>
            <div className='cover-quote'>
              <h2>TAKE THE FIRST STEP TOWARDS HEALING</h2>
              <p>-therapy is not a sign of weakness, but a courageous act of self-care.</p>
            </div>
          </div>
          <div className='welcome'>
            <div className='welcome-container'>
              <img src={DecorSun} alt=''/>
              <h1>Welcome to Uplift Therapy!</h1>
              <p>Uplift Therapy helps individuals, couples, and families who are experiencing emotional 
                and behavioral difficulties. With growth in mind, Uplift Therapy aims to enhance 
                relationships and improve functioning in daily life. Therapy is conducted in a safe, 
                comfortable, and supportive atmosphere in which the therapist takes a highly 
                collaborative treatment approach tailored to each of the client’s needs to help them 
                attain the growth they are striving for.</p>
            </div>
          </div>
          <div className='expertise'>
            <h1>OUR CLINICAL FOCUS</h1>
            <div className='expertise-cards-container'>
              <div className='expertise-cards'>
                <img src={CoupleImg} alt='A couple looking at sunset'/>
                <div className='expertise-card-content'>
                  <h2>Couples</h2>
                  <p>Couples Therapy helps people reconnect with their partner by reducing conflict, 
                    restoring friendship, fun and intimacy. With the intention of  resolving past hurts 
                    and resentments, it creates a more loving, close, healthy relationship.</p>
                  <Link to={'/couples'}>
                      <button className='learn-more-btn'>
                        Learn More &rarr;
                      </button>
                    </Link>
                </div>
              </div>
              <div className='expertise-cards'>
                <img src={FamilyImg} alt='A couple looking at sunset'/>
                <div className='expertise-card-content'>
                  <h2>Family</h2>
                  <p>Families can benefit from therapy when they experience a stressful event that strains 
                    family relationships. Family therapy is designed to improve communication, problem-solving, 
                    coping skills, and enhance the connection of the family unit.</p>
                  <Link to={'/family'}>
                    <button className='learn-more-btn'>
                      Learn More &rarr;
                    </button>
                  </Link>
                </div>
              </div>
              <div className='expertise-cards'>
                <img src={IndImg} alt='A couple looking at sunset'/>
                <div className='expertise-card-content'>
                  <h2>Individuals</h2>
                  <p>Individual therapy is a personal journey toward personal growth and an increase in life 
                    satisfaction. Through the process of therapy, you will develop an increased understanding 
                    and insight toward yourself and those around you.</p>
                  <Link to={'/individuals'}>
                    <button className='learn-more-btn'>
                      Learn More &rarr;
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='about-therapist'>
            <div className='about-therapist-content'>
              <h2>MEET THE THERAPIST</h2>
              <h3>Rosi Torres, MS, LMHP</h3>
              <p>"As a therapist, witnessing my clients overcome their struggles and transform their lives 
                is not just my job, it's my passion and the ultimate reward of my work."</p>
              <Link to={'/about'}>
                <button className='learn-more-btn-two'>
                  Learn More &rarr;
                </button>
              </Link>
            </div>
            <div className='about-therapist-image'>
              <img src={Owner} alt='Rosi Torres, MS, LMHP'/>
            </div>
          </div>
          <div className='home-process'>
            <h2>THE PROCESS</h2>
            <div className='home-process-container'>
              <div className='process-card'>
                <img src={DecorIcon} alt=''/>
                <h3><span>1.</span> SCHEDULE YOUR CONSULTATION</h3>
                <p>Contact us to schedule your first appointment. We can provide information about insurance
                   coverage and help clients understand their payment options.</p>
              </div>
              <div className='process-card'>
              <img src={DecorIcon} alt=''/>
                <h3><span>2.</span> CREATE A PLAN</h3>
                <p>By working collaboratively with clients, we can help create a roadmap for success 
                  and provide ongoing support and guidance along the way.</p>
              </div>
              <div className='process-card'>
              <img src={DecorIcon} alt=''/>
                <h3><span>3.</span> BEGIN YOUR JOURNEY</h3>
                <p> Begin your journey towards self-discovery and personal growth with tools and strategies 
                  to navigate challenges.</p>
              </div>
            </div>
          </div>
          <div className='testimonial-section'>
            <h2>TESTIMONIALS</h2>
            <Testimonials/>
          </div>
        </div>
    );
  }
}

export default Home;