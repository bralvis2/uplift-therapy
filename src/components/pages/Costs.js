import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CostBanner from '../site-images/cost-banner.png'
import CostA from '../site-images/cost-a.png'
import DecorIcon from '../site-images/decor-icon.png'
import Telehealth from '../site-images/telehealth.png'

// Style Sheet
import './Costs.css'

class Costs extends Component {
  render() {
    return (
      <div>
        <div className='cost-banner'>
          <div className='cost-banner-image'>
            <img src={CostBanner} alt='' />
          </div>
          <div className='cost-banner-quote'>
            <h1>COST</h1>
          </div>
        </div>
        <div className='insurance-section'>
          <h2>We Accept Insurance</h2>
          <div className='insurance-container'>
            <div className='insurance'>
              <img src={DecorIcon} alt='' />
              <h3>BLUE CROSS BLUE SHIELD</h3>
            </div>
            <div className='insurance'>
              <img src={DecorIcon} alt='' />
              <h3>MIDLANDS CHOICE</h3>
            </div>
            <div className='insurance'>
              <img src={DecorIcon} alt='' />
              <h3>MEDICAID</h3>
            </div>
          </div>
        </div>
        <div className='private-pay'>
          <div className='private-pay-content'>
            <h2>PRIVATE PAY</h2>
            <div className='payment-card'>
              <h3>$190</h3>
              <p>*53 Minutes*<br />
                Families & Individuals</p>
            </div>
            <div className='payment-card'>
              <h3>$205</h3>
              <p>*53 Minutes*<br />
                Couples</p>
            </div>
          </div>
          <div className='private-pay-image'>
            <img src={CostA} alt='' />
          </div>
        </div>
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
            <Link to={'/contact'}>
              SEND US AN INQUIRY &rarr;
            </Link>
          </div>
        </div>
        <div className='policies-section'>
          <div className='policies-content'>
            <h2>POLICIES</h2>
            <p>We understand that unforeseen circumstances may arise, and you may need to reschedule or cancel
              your appointment. However, we kindly request a 24-hour notice for any cancellation or rescheduling
              of your appointment. Failure to provide a 24-hour notice or repeated cancellations may result in
              a cancellation fee. Clients with Medicaid insurance will be referred out after repeated
              cancellations.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Costs;