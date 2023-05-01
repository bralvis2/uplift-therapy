import React, { Component } from 'react';
import ContactBanner from '../site-images/contact-banner.png'
import Space from '../site-images/contact-space.png'
import ContactForm from './Form/Form.js'
// import Testimonials from './Testimonials/Testimonials.js'
// import Star from '../SVG-icons/star.svg'
import DecorIcon from '../site-images/decor-icon.png'

// Style Sheet
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact-cover'>
          <div className='contact-page-image'>
            <img src={ContactBanner} alt='Road towards the sunset' />
          </div>
          <div className='cover-quote-two'>
            <h2>SEND US AN INQUIRY</h2>
          </div>
        </div>
        <div className='message'>
          <h2>WE ARE CURRENTLY NOT TAKING NEW CLIENTS</h2>
        </div>
        <div className='contact-info-section'>
          <div className='contact-info-container'>
            <div className='space-image'>
              <img src={Space}  alt="Office Space"/>
            </div>
            <div className='contact-info-content'>
              <h2>EMAIL IS THE PREFFERED METHOD OF COMMUNICATION</h2>
              <ul>
                <li className='contact-info'>
                  <a href="mailto:rtorresmft@gmail.com">
                    <div className='contact-icons'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 
                      51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 
                      99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 
                      128v42.667z"></path>
                      </svg>
                    </div>
                    rtorresmft@gmail.com
                  </a>
                </li>
                <li className='contact-info'>
                  <a href="tel:+4022029057">
                    <div className='contact-icons'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M426.666 330.667c-26.666 0-52.271-4.271-75.729-11.729-7.469-2.136-16-1.073-21.332 
                      5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 
                      7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 
                      160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 
                      21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"></path>
                      </svg>
                    </div>
                    (402)202-9057
                  </a>
                </li>
                <li className='contact-info'>
                  <a href='https://www.google.com/maps/place/4435+O+St+212+b,+Lincoln,+NE+68510/@40.8132177,-96.6604739,17z/data=!3m1!4b1!4m5!3m4!1s0x8796bc2eb9e54619:0xc41af7bc89b96a78!8m2!3d40.8132177!4d-96.657899'
                    target='_blank'
                    rel="noreferrer">
                    <div className='contact-icons'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M255.5,470a12,12,0,0,1-9.49-4.66c-.36-.46-36.12-46.81-71.38-102.15C126.44,
                        287.57,102,231.61,102,196.88c0-84.64,68.86-153.5,153.5-153.5S409,112.24,409,196.88c0,
                        34.73-24.44,90.69-72.63,166.32-35.26,55.34-71,101.69-71.38,102.15A12,12,0,0,1,255.5,
                        470Zm0-402.63A129.64,129.64,0,0,0,126,196.88C126,217.57,138,261,194.87,350.3c23.81,
                        37.36,47.81,70.51,60.63,87.77,12.85-17.29,36.9-50.52,60.72-87.91C373.07,260.92,385,
                        217.55,385,196.88A129.64,129.64,0,0,0,255.5,67.38Z"></path>
                        <path d="M255.5,262.17a65.29,65.29,0,1,1,65.29-65.29A65.37,65.37,0,0,1,
                        255.5,262.17Zm0-106.58a41.29,41.29,0,1,0,41.29,41.29A41.33,41.33,0,0,0,255.5,155.59Z"></path>
                      </svg>
                    </div>
                    4435 O Street Suite #212-B
                    <br />Lincoln, NE 68510
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='contact-form-section'>
          <ContactForm />
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
        {/* <div className='testimonial-section'>
          <h2>TESTIMONIALS</h2>
          <div className='ratings'>
            <img src={Star}></img>
            <img src={Star}></img>
            <img src={Star}></img>
            <img src={Star}></img>
            <img src={Star}></img>
          </div>
          <Testimonials />
        </div> */}
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

export default Contact;