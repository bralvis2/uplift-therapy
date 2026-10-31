import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Video, ShieldCheck, Award } from 'lucide-react';
import AboutBanner from '../site-images/about-cover.png';
import Owner from '../site-images/torres-LIMHP-LMFT 1.jpg';
import CheckMark from '../SVG-icons/check-mark.svg'
import ImgA from '../site-images/about-img-a.png'
import DecorIconL from '../site-images/decor-icon-light.png'
import DecorIcon from '../site-images/decor-icon.png'

// Style Sheet
import '../../App.css'
import './About.css'


class About extends Component {
  render() {
    return (
      <div className='about'>
        <div
          className="full-width-center about-hero pad-t-l pad-b-m"
          role="img"
          aria-label="Professional Therapy Services in Lincoln, Nebraska"
        >
          <div className="hub-hero-width">
            <h1 className="light h1">About Uplift Therapy</h1>
            <p className='hero-subtitle light'>Compassionate, Specialized Therapy in Lincoln, NE.
            Warmest	Care That Helps You Feel Seen, Understood, and Hopeful.</p>
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
        <div className='about-therapist'>
          <div className='about-therapist-content'>
            <h2>MEET THE THERAPIST</h2>
            <h3>Rosi Torres, LIMHP, LMFT</h3>
            <p>As a therapist, witnessing my clients overcome their struggles and transform their lives
              is not just my job, it's my passion and the ultimate reward of my work. I firmly believe people
              have the ability to change at any time and reach their self-actualization. Psychotherapy is about
              gaining insight to undo patterns that previously served a purpose, but now are getting you stuck
              in life.  My commitment is to meet you where you are and help guide you to reach your therapy goals.</p>
          </div>
          <div className='about-therapist-image'>
            <img src={Owner} alt='Rosi Torres, MS, LMHP' />
          </div>
        </div>

        <div className='about-section-3'>
          <h2>HOW I CAN HELP</h2>
          <div className='about-section-3-container'>
            <div className='about-section-3-image'>
              <img src={ImgA} alt='' />
            </div>
            <div className='about-section-3-content'>
              <div className='about-section-3-cards'>
                <img src={DecorIconL} alt='' />
                <h3>EXPERTISE</h3>
                <p>My clinical experience and continuing education through conferences and workshops enables
                  me to provide evidence-based treatments and interventions, tailored to clients' unique needs
                  and goals.</p>
              </div>
              <div className='about-section-3-cards'>
                <img src={DecorIconL} alt='' />
                <h3>EXCEPTIONAL COMMUNICATION</h3>
                <p>I strive to have exceptional communication skills with my clients. I believe that clear and
                  effective communication is key to building a strong therapeutic relationship and helping my
                  clients achieve their goals.</p>
              </div>
              <div className='about-section-3-cards'>
                <img src={DecorIconL} alt='' />
                <h3>SUPPORT</h3>
                <p>My role is to provide a safe and supportive space for my clients to explore their thoughts and
                  feelings without fear of judgment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='experience'>
          <h2>CONTINUING EDUCATION</h2>
          <div className='experience-container'>
            <div className='experience-content'>
              <img src={CheckMark} alt='check mark icon' />
              <h3>Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</h3>
              {/* <p>"Evidence-based treatment for children and adolescents impacted by trauma and their parents or caregivers."</p> */}
            </div>
            <div className='experience-content'>
              <img src={CheckMark} alt='check mark icon' />
              <h3>Eye Movement Desensitization and Reprocessing (EMDR)</h3>
              {/* <p>Mental health services for adults and families.</p> */}
            </div>
            <div className='experience-content'>
              <img src={CheckMark} alt='check mark icon' />
              <h3>Gottman Level 2 trained </h3>
              {/* <p>Mental health services for children and families.</p> */}
            </div>
          </div>
          <div className='qualifications-container'>
            <div className='q-cards'>
              <h2>LICENSES</h2>
              <div className='q-card-content license-card'>
                <img src={CheckMark} alt='check mark icon' />
                <h4>Licensed Independent Mental Health Practictioner</h4>
              </div>
              <div className='q-card-content license-card'>
                <img src={CheckMark} alt='check mark icon' />
                <h4>Licensed Marriage and Family Therapist</h4>
              </div>
              <div className='q-card-content license-card'>
                <img src={CheckMark} alt='check mark icon' />
                <h4>Certificate in Medical Family Therapy</h4>
              </div>
            </div>
            <div className='q-cards'>
              <h2>EDUCATION</h2>
              <div className='q-card-content'>
                <img src={CheckMark} alt='check mark icon' />
                <div>
                  <h4>Masters of Science (M.S.) in Child, Youth, & Family Studies
                    <br /><span className='block, s-em'>specialization in Marriage and Family Therapy </span></h4>
                  <p>UNIVERSITY OF NEBRASKA, LINCOLN NE</p>
                </div>
              </div>
              <div className='q-card-content'>
                <img src={CheckMark} alt='check mark icon' />
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
            <img src={DecorIcon} alt='' />
            <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" >SEND US AN INQUIRY</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;