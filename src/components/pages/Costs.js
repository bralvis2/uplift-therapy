import React, { Component } from 'react';
import CostBanner from '../site-images/cost-banner.png'
import CostA from '../site-images/cost-a.png'
import DecorIcon from '../site-images/decor-icon.png'

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
      </div>
    );
  }
}

export default Costs;