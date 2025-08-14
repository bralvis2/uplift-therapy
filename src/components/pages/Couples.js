import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoupleBanner from '../site-images/couples-banner.png'
import DecorIconL from '../site-images/decor-icon-light.png'
import CoupleA from '../site-images/couple-a.png'
import CoupleB from '../site-images/couple-b.png'
import CheckMark from '../SVG-icons/check-mark-dark.svg'
import Goal from '../SVG-icons/goal.svg'
import Progress from '../SVG-icons/progress.svg'
import Month from '../SVG-icons/month.svg'

// Style Sheet
import './Couples.css'

class Couples extends Component {
  render() {
    return (
      <div className='couples'>
        <div className='couples-banner-container'>
          <div className='couples-banner-image'>
            <img src={CoupleBanner} alt='Couple on the beach' />
          </div>
          <div className='couple-banner-quote'>
            <h1>COUPLES THERAPY</h1>
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
            <Link to={'/contact'}>SEND US AN INQUIRY</Link>
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