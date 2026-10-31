import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BadgeCheck, Video, ShieldCheck, Award } from 'lucide-react';
import ServiceGrid from '../components/ServiceGrid/ServiceGrid';


import DecorIcon from '../assets/site-images/decor-icon.png'
import SplitFeature from '../components/SplitFeature/SplitFeature';
import therapistImg from '../assets/site-images/uplift-therapy-torres-limhp-lmft.jpeg';
// import Testimonials from './Testimonials/Testimonials';
// import Star from '../SVG-icons/star.svg'
import AboutUplift from '../assets/site-images/couples-therapy-session-in-lincoln-ne.jpg'
import Telehealth from '../assets/site-images/telehealth.png'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Helmet>
          <title>Therapy in Lincoln, Nebraska | Uplift Therapy</title>
          <meta
            name="description"
            content="Uplift Therapy offers couples, family, individual, EMDR, and IFS therapy in Lincoln, NE. Telehealth for Nebraska residents. Schedule a consultation."
          />
        </Helmet>

        <div
          className="full-width-center home-hero v-center"
          role="img"
          aria-label="Professional Therapy Services in Lincoln, Nebraska"
        >
          <div className="standard-width pad-t-l pad-b-m hero-content hero-pad">
            <h1 className="light">Compassionate Therapy in Lincoln, NE for Individuals, Couples, and Families</h1>
            <p className="hero-subtitle light">
              Take the first step towards healing. You don’t have to figure it out alone.
            </p>
            <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
            <a href='/services/' rel="noreferrer noopener" className='btn-secondary'>Explore Services</a>
          </div>
        </div>

        <div className='full-width-center trust-container'>
          <ul className="hero-trust" aria-label="Why clients choose Uplift Therapy">
            <li className="hero-trust__item">
              <BadgeCheck className="hero-trust__icon" aria-hidden="true" />
              <div>
                <span className="hero-trust__label">Licensed</span>
                <span className="hero-trust__value">Marriage &amp; Family Therapist</span>
              </div>
            </li>

            <li className="hero-trust__item">
              <Video className="hero-trust__icon" aria-hidden="true" />
              <div>
                <span className="hero-trust__label">Telehealth</span>
                <span className="hero-trust__value">Available across Nebraska</span>
              </div>
            </li>

            <li className="hero-trust__item">
              <ShieldCheck className="hero-trust__icon" aria-hidden="true" />
              <div>
                <span className="hero-trust__label">In-network</span>
                <span className="hero-trust__value">BCBS, Midlands Choice &amp; Medicaid</span>
              </div>
            </li>

            <li className="hero-trust__item">
              <Award className="hero-trust__icon" aria-hidden="true" />
              <div>
                <span className="hero-trust__label">Specialized training</span>
                <span className="hero-trust__chips">
                  <Link className="hero-trust__chip" to="/services/couples-therapy/">Gottman Level 2</Link>
                  <Link className="hero-trust__chip" to="/services/ifs-therapy/">IFS Level 1</Link>
                  <Link className="hero-trust__chip" to="/services/emdr-therapy/">EMDR</Link>
                </span>
              </div>
            </li>
          </ul>
        </div>



        <div className='full-width-center pad-tb-m green-linen-bg'>
          <div className='standard-width text-image-layout'>
            <div className='half-width text-container'>
              <h2 className='h2 light'>About Uplift Therapy</h2>
              <p className='body-text light'>
                Uplift Therapy helps individuals, couples, and families who are experiencing emotional
                and behavioral difficulties. With growth in mind, Uplift Therapy aims to enhance
                relationships and improve functioning in daily life. Therapy is conducted in a safe,
                comfortable, and supportive atmosphere in which the therapist takes a highly
                collaborative treatment approach tailored to each of the client’s needs to help them
                attain the growth they are striving for.                            </p>
              <a href='/about/' rel="noreferrer noopener" className='btn-secondary' aria-label='Learn More About Us'>Learn More</a>

            </div>
            <div className='half-width image-container border-radius box-shadow outline-dark'>
              <img src={AboutUplift} alt='' className="border-radius" />
            </div>
          </div>
        </div>

        <ServiceGrid />

        <SplitFeature
          theme="olive"
          title="Meet the Therapist"
          subtitle="Rosi Torres, LIMHP, LMFT"
          quote
          image={therapistImg}
          imageAlt="Rosi Torres, licensed marriage and family therapist in Lincoln, NE"
          imagePosition="center top"
          linkText="Learn More"
          linkTo="/about/"
        >
          <p>
            “As a therapist, witnessing my clients overcome their struggles and
            transform their lives is not just my job, it’s my passion and the
            ultimate reward of my work.”
          </p>
        </SplitFeature>
        <div className='home-process pad-t-m'>
          <h2>THE PROCESS</h2>
          <div className='home-process-container'>
            <div className='process-card'>
              <img src={DecorIcon} alt='' />
              <h3><span>1.</span> SCHEDULE YOUR CONSULTATION</h3>
              <p>Contact us to schedule your first appointment. We can provide information about insurance
                coverage and help clients understand their payment options.</p>
            </div>
            <div className='process-card'>
              <img src={DecorIcon} alt='' />
              <h3><span>2.</span> CREATE A PLAN</h3>
              <p>By working collaboratively with clients, we can help create a roadmap for success
                and provide ongoing support and guidance along the way.</p>
            </div>
            <div className='process-card'>
              <img src={DecorIcon} alt='' />
              <h3><span>3.</span> BEGIN YOUR JOURNEY</h3>
              <p> Begin your journey towards self-discovery and personal growth with tools and strategies
                to navigate challenges.</p>
            </div>
          </div>
        </div>
        {/* <div className='testimonial-section'>
            <h2>TESTIMONIALS</h2>
            <div className='ratings'>
              <img src={Star}></img>
              <img src={Star}></img>
              <img src={Star}></img>
              <img src={Star}></img>
              <img src={Star}></img>
            </div>
            <Testimonials/>
          </div> */}
        <div className='telehealth-section'>
          <div className='telehealth-image'>
            <img src={Telehealth} alt='Online mental health services' />
          </div>
          <div className='telehealth-content'>
            <h2>TELEHEALTH</h2>
            <p>
              Telehealth services are mental health services that are provided remotely through electronic
              communication technologies such as video conferencing or phone call. This type of service allows
              clients to access mental health care from the comfort of their own homes or other convenient
              locations, while also providing greater flexibility in scheduling appointments. *Available for Nebraska Residents Only.*
            </p>
            <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" >SEND US AN INQUIRY &rarr;</a>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;