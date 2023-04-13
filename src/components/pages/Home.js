import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoverPage from '../site-images/home-cover.png'
import DecorSun from '../site-images/home-decor-icon.png'

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
            <div className='expertise-couples'>
              <h2>Couples</h2>
              <button>
                <Link to={'/couples'}>Learn More &rarr;</Link>
              </button>
            </div>
            <div className='expertise-family'>
              <h2>family</h2>
              <button>
                <Link to={'/family'}>Learn More &rarr;</Link>
              </button>
            </div>
            <div className='expertise-individuals'>
              <h2>individuals</h2>
              <button>
                <Link to={'/individuals'}>Learn More &rarr;</Link>
              </button>
            </div>
          </div>
          <div className='about-therapist'>
            <h2>MEET THE THERAPIST</h2>
            <h3>Rosi Torres, MS, LMHP</h3>
            <p>"As a therapist, witnessing my clients overcome their struggles and transform their lives 
              is not just my job, it's my passion and the ultimate reward of my work."</p>
            <button>
              <Link to={'/about'}>Learn More &rarr;</Link>
            </button>
          </div>
          <div className='what-to-expect'>
            <div>
              <h2>1.</h2>
            </div>
            <div>
              <h2>2.</h2>
            </div>
            <div>
              <h2>3.</h2>
            </div>
          </div>
          <div className='testimonials'>
            <h2>Testimonials</h2>
          </div>
        </div>
    );
  }
}

export default Home;