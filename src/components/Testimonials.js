import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Style Sheet
import './Testimonials.css'


export default function Testimonials() {
    return (
        <div className='testimonial-container'>
            <Carousel>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='testimonial'>
                            <h3>"FAMILY THERAPY WAS A LIFELINE FOR US"</h3>
                            <p className='testimonial-content'>"Our therapist helped us navigate a difficult family dynamic and heal old wounds.
                                We're now able to communicate better and have a stronger bond as a family."</p>
                            <p className='client'>- BA</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='testimonial'>
                            <h3>"THE BEST DECISION MY PARTNER AND I EVER MADE"</h3>
                            <p className='testimonial-content'>"I was hesitant to try couples therapy at first, but it
                                was the best decision my partner and I ever made. Our therapist was able to help us
                                navigate difficult conversations and understand each other's perspectives.
                                We're now able to communicate better and have a stronger, healthier relationship."</p>
                            <p className='client'>- CT</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='testimonial'>
                            <h3>"I CAN'T IMAGINE OUR LIFE WITHOUT IT"</h3>
                            <p className='testimonial-content'>"My partner and I were constantly fighting and couldn't
                                seem to find common ground. Our therapist helped us identify the underlying
                                issues and gave us tools to work through them. We're now able to resolve conflicts
                                more effectively and have a deeper understanding of each other."</p>
                            <p className='client'>- PT</p>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}