import React, { Component } from 'react';
import ContactBanner from '../site-images/contact-banner-a.png'
import ContactForm from './Form/Form.js'

// Style Sheet
import './Contact.css'

class Contact extends Component {
  render() {
    return (
        <div>
          <div className='contact-cover'>
            <div className='contact-page-image'>
              <img src={ContactBanner} alt='Road towards the sunset'/>
            </div>
            <div className='cover-quote-two'>
              <h2>SEND US AN INQUIRY</h2>
            </div>
          </div>
          <div className='contact-form-section'>
            <ContactForm/>
          </div>
        </div>
    );
  }
}

export default Contact;