import React, { Component } from 'react';
import { } from 'react-router-dom';
import Cover from '../site-images/individual-cover.png'
import DecorIcon from '../site-images/decor-icon.png'
import CheckMark from '../SVG-icons/check-mark.svg'
import IndA from '../site-images/individual-a.png'
import IndB from '../site-images/individual-b.png'
import Goal from '../SVG-icons/goal.svg'
import Progress from '../SVG-icons/progress.svg'
import Month from '../SVG-icons/month.svg'

// Style Sheet
import './Individuals.css'

class Individuals extends Component {
  render() {
    return (
      <div>
        <div className='individual-banner'>
          <div className='individual-cover'>
            <img src={Cover} alt='' />
          </div>
          <div className='indiv-banner-quote'>
            <h1>INDIVIDUAL THERAPY</h1>
          </div>
        </div>
        <div className='indiv-intro'>
          <img src={DecorIcon} alt='Decor Icon' />
          <h2>ABOUT INDIVIDUAL THERAPY</h2>
          <p>The focus in individual therapy is to help individuals improve their mental health and overall
            well-being by exploring and addressing their emotional, behavioral, and psychological issues.
            It is a one-on-one treatment where we work with clients to identify and address the
            underlying causes of their problems and help them develop coping strategies to manage their symptoms.
            We provide a supportive and non-judgmental environment for the client to express their thoughts and
            feelings and work towards their personal goals.</p>
        </div>
        <div className='indiv-benefits'>
          <div className='indiv-benefits-content'>
            <h2>Individual Therapy Can Help:</h2>
            <ul className='indiv-list-container'>
              <li>
                <img src={CheckMark} alt='check mark' />
                <p>Focus on your personal issues and concerns.</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark' />
                <p>Explore personal topics and experiences in a confidential and safe setting without fear of
                  judgment or repercussion.</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark' />
                <p>Potential for deeper introspection and self-exploration, as therapy can provide a space to
                  reflect on personal values, beliefs, and behaviors.</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark' />
                <p>Address and work through personal issues that may not be relevant or appropriate in a family
                  or marriage therapy setting.</p>
              </li>
              <li>
                <img src={CheckMark} alt='check mark' />
                <p>Improve self-awareness, self-esteem, and self-confidence through individual growth and progress.</p>
              </li>
            </ul>
          </div>
          <div className='indiv-benefit-image'>
            <img src={IndA} alt='Women on computer' />
          </div>
        </div>
        <div className='process'>
          <h2>WHAT TO EXPECT</h2>
          <div className='process-container'>
            <div className='process-cards'>
              <img src={Goal} alt='' />
              <h3>GOALS</h3>
              <p><span>Session 1: </span>An initial assessment to identify issues and concerns.</p>
              <p><span>Session 2: </span>Goal-setting to establish what the client hopes to achieve through therapy.</p>
            </div>
            <div className='process-cards'>
              <img src={Progress} alt='' />
              <h3>PLAN</h3>
              <p><span>Session 3: </span>Development of a treatment plan.</p>
              <p><span>Session 4 + : </span>Regular therapy sessions and homework assignments or other exercises to be
                completed outside of therapy sessions.</p>
            </div>
            <div className='process-cards'>
              <img src={Month} alt='' />
              <h3>FOLLOW UP</h3>
              <p><span>Session +: </span>Gradual reduction in therapy frequency as progress is made. A focus on
                long-term sustainable change that can be maintained after therapy has ended.</p>
            </div>
          </div>
        </div>
        <div className='individual-contact-section'>
          <div className='individual-c-container'>
            <img src={IndB} alt='Man looing into the distance' />
          </div>
          <div className='individual-contact-content'>
            <h2>ARE YOU READY TO BEGIN THE JOURNEY TOWARDS HEALING?</h2>
            <img src={DecorIcon} alt='' />
            <a href="https://rosa-torres.clientsecure.me/" target="_blank" rel="noopener noreferrer">
    SEND US AN INQUIRY
  </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Individuals;