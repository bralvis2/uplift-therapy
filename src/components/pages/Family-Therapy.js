import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FamilyA from '../site-images/family-a.png'
import FamilyB from '../site-images/family-b.png'
import FamilyC from '../site-images/family-c.png'
import DecorIcon from '../site-images/decor-icon.png'
import CheckMark from '../SVG-icons/check-mark.svg'
import Goal from '../SVG-icons/goal.svg'
import Progress from '../SVG-icons/progress.svg'
import Month from '../SVG-icons/month.svg'

// Style Sheet
import '../pages/Family.css'

class Family extends Component {
  render() {
    return (
      <div className='family'>
        <div className='family-banner'>
          <img src={FamilyA} />
          <div className='family-banner-content'>
            <h1>FAMILY THERAPY</h1>
            <p>Families can benefit from therapy when they experience a stressful event that strains family
              relationships. Family therapy is designed to improve communication, problem-solving, coping
              skills, and enhance the connection of the family unit.</p>
          </div>
        </div>
        <div className='family-therapy-about'>
          <div className='family-therapy-about-content' >
            <h2>About Family Therapy</h2>
            <p>Family therapy is focused on the dynamics of the family unit as a whole, and how each individual
              in the family affects and is affected by those dynamics. The therapist works with the entire family
              to identify patterns of behavior and communication, as well as any underlying issues that may be
              contributing to challenges. Family therapy can involve a range of family members, including parents,
              children, and extended family members.</p>
          </div>
          <img src={DecorIcon} />
        </div>
        <div className='family-issues-section'>
          <div className='family-issue-image'>
            <img src={FamilyB} alt='' />
          </div>
          <div className='family-issues-container'>
            <h2>Family Therapy Can Help:</h2>
            <ul className='family-issue-list'>
              <li>
                <img src={CheckMark} alt='check mark' />
                <p>Improve Communication Skills</p>
              </li>
              <li>
                <img src={CheckMark} alt='' />
                <p>Reduce Conflict & Improve Harmony</p>
              </li>
              <li>
                <img src={CheckMark} alt='' />
                <p>Improve Behavior & Emotional Regulation</p>
              </li>
              <li>
                <img src={CheckMark} alt='' />
                <p>Reduce Stress & Anxiety</p>
              </li>
              <li>
                <img src={CheckMark} alt='' />
                <p>Coping Skills For Dealing With Grief & Loss</p>
              </li>
              <li>
                <img src={CheckMark} alt='' />
                <p>Skills to Adapt to Changes</p>
              </li>
              <li>
                <img src={CheckMark} alt='' />
                <p>Improved Financial Management & Decision-Making</p>
              </li>
              <li>
                <img src={CheckMark} alt='' />
                <p>Overcome Mental health issues arising from Trauma.</p>
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
              <p><span>Session 1: </span>An initial assessment to identify issues and concerns.</p>
              <p><span>Session 2: </span>Goal-setting to establish what the family hopes to achieve through therapy.</p>
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
        <div className='family-contact-section'>
          <div className='family-contact-content'>
            <h2>IS YOUR FAMILY READY TO BEGIN THE JOURNEY TOWARDS HEALING?</h2>
            <img src={DecorIcon} alt='' />
            <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" >SEND US AN INQUIRY</a>
          </div>
          <div className='family-c-container'>
            <img src={FamilyC} alt='Third Family example' />
          </div>
        </div>
      </div>
    );
  }
}

export default Family;