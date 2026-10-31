import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DecorIconL from '../assets/site-images/decor-icon-light.png'
import CoupleA from '../assets/site-images/couple-a.png'
import CoupleB from '../assets/site-images/couple-b.png'
import CheckMark from '../assets/SVG-icons/check-mark-dark.svg'
import Goal from '../assets/SVG-icons/goal.svg'
import Progress from '../assets/SVG-icons/progress.svg'
import Month from '../assets/SVG-icons/month.svg'

// Style Sheet
import './Couples.css'

class Couples extends Component {
  render() {
    return (
      <div className='couples'>
       <div
          className="full-width-center couples-hero pad-t-l pad-b-m"
          role="img"
          aria-label="Professional Therapy Services in Lincoln, Nebraska"
        >
          <div className="hub-hero-width">
            <h1 className="light h1">Couples Counseling & Marriage Therapy in Lincoln, NE</h1>
            <p className='hero-subtitle light'>Evidence-based care from a licensed marriage and family therapist trained in the Gottman Method.</p>
          </div>
        </div>
        <div className='couples-intro'>
          <img src={DecorIconL} alt='Decor Icon' />
          <h2>About Couples Therapy</h2>
          <p>It's not uncommon for many things to get in the way of a fulfilling, deep relationship.
            Life events and personal choices can sometimes result in conflict between partners. In other
            cases, closeness can slowly disspiate over time. With busy schedules and the demands of daily
            life, it can be easy for couples to grow apart without even realizing it. This is where
            couples therapy can be a valuable resource.</p>
        </div>
        <div className='couples-intro-two'>
          <h2>Is couples therapy right for us?</h2>
          <p>Couples therapy can be beneficial for any couple struggling with relationship challenges.
            Through therapy, you can work together to improve communication, rebuild trust, and establish
            healthier patterns that can lead to a stronger and more fulfilling relationship.</p>
          <div className='couples-intro-two-container'>
            <div className='couples-intro-two-image'>
              <img src={CoupleA} alt='couple embrasing' />
            </div>
            <ul className='couples-list-container'>
              <li>
                <img src={CheckMark} />
                <p>Strengthen Communication</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark icon' />
                <p>Problem Solving & Resolution Skills</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark icon' />
                <p>Rebuild Trust & Intimicy</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark icon' />
                <p>Manage Stressors and Disagreements</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark icon' />
                <p>Estabish Healthy Habbits</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark icon' />
                <p>Overall Increase Satisfaction in Relationship</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='process'>
          <h2>WHAT TO EXPECT</h2>
          <div className='process-container'>
            <div className='process-cards'>
              <img src={Goal} alt='' />
              <h3>GOALS</h3>
              <p><span>Session 1:</span>Conduct assessments to gain a better understanding of the couple's
                communication style, attachment style, and any underlying mental health issues.</p>
              <p><span>Session 2: </span>Goal-setting to establish what the couple hopes to achieve through therapy.</p>
            </div>
            <div className='process-cards'>
              <img src={Progress} alt='' />
              <h3>PLAN</h3>
              <p><span>Session 3: </span>After identifying areas for growth, develop a plan to reach goals.</p>
              <p><span>Session 4 +: </span>Weekly sessions and introduce activities to practice outside of the therapy session. </p>
            </div>
            <div className='process-cards'>
              <img src={Month} alt='' />
              <h3>FOLLOW UP</h3>
              <p><span>Session +: </span>Set goals for the future and develop strategies for maintaining progress made in therapy.
                Prepare the couple for the end of therapy and providing resources for continued growth and improvement.</p>
            </div>
          </div>
        </div>
        <div className='couples-contact-section'>
          <div className='couples-contact-content'>
            <h2>ARE YOU READY TO BEGIN YOUR JOURNEY TOWARDS HEALING?</h2>
            <img src={DecorIconL} alt='' />
            <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" >SEND US AN INQUIRY</a>
          </div>
          <div className='couple-b-container'>
            <img src={CoupleB} alt='Second Couple example' />
          </div>
        </div>
      </div>
    );
  }
}

export default Couples;