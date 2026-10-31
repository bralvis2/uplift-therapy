import React, { Component } from 'react';
import { ReactComponent as CheckMark } from '../assets/SVG-icons/check-mark-dark.svg';
import { ReactComponent as GoalIcon } from '../assets/SVG-icons/goal.svg';
import { ReactComponent as ProgressIcon } from '../assets/SVG-icons/progress.svg';
import { ReactComponent as MonthIcon } from '../assets/SVG-icons/month.svg';
import DiscernmentTherapyBenefit from '../assets/site-images/Why-Choose-Discernment-Counseling.jpg';
import AboutDiscernmentTherapy from '../assets/site-images/couple-in-difficult-conversation.jpg';
import FAQDiscernmentTherapy from '../assets/site-images/faq-about-discernment-counseling.jpg';
import Accordion from "../components/Accordion";

import './Home.css';
import '../App.css';
import './Services.css';

class DiscernmentCounseling extends Component {
    render() {

        const faqItems = [
            {
                question: "How is discernment counseling different from couples therapy?",
                answer:
                    "Discernment counseling is designed for couples where one person is unsure about staying in the marriage, while the other wants to work on it. Unlike couples therapy, which assumes both partners are committed, discernment counseling helps you decide whether to work on the marriage. It's short-term (1–5 sessions) and focused on decision-making, not solving relationship problems."
            },
            {
                question: "How many sessions does discernment counseling take?",
                answer:
                    "Most couples attend 3–5 sessions, with the full range being 1–5 sessions. Each session is about 2 hours. The process is intentionally brief and designed to give clarity—not long-term therapy."
            },
            {
                question: "What if only one of us wants to come to counseling?",
                answer:
                    "Many couples start with one partner more hesitant. It’s completely normal. We create a safe, nonjudgmental space so both perspectives are fully heard. If you're unsure how to approach your partner, we can guide you in starting that conversation."
            },
            {
                question: "What are the possible outcomes of discernment counseling?",
                answer:
                    "There are three possible paths: staying in the marriage as-is, committing to couples therapy to work on the relationship, or moving toward separation. The goal is clarity—not pressure—so you can move forward with confidence."
            },
            {
                question: "Will discernment counseling save my marriage?",
                answer:
                    "Discernment counseling isn’t designed to save marriages—it’s designed to help you make a clear, informed decision about the marriage’s future. Some couples commit fully to repair work afterward, while others gain clarity that separation is the healthiest next step."
            }
        ];

        return (
            <div>

                <div className='full-width-center pad-t-l pad-b-m hero-pad discernment-hero'>
                    <div className='pad-s standard-width'>
                        <h1 className='h1 light'>Discernment Counseling</h1>
                        <p className='body-text light margin-bottom'>Finding Clarity When You’re Unsure About Your Relationship</p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>

                <div className='full-width-center pad-tb-m dark-bg'>
                    <div className='standard-width text-image-layout'>
                        <div className='half-width text-container'>
                            <h2 className='h2 light'>About Discernment Counseling</h2>
                            <p className='body-text light'>
                                Sometimes couples find themselves stuck in a place of uncertainty—one person is leaning toward ending the relationship, while the other wants to work things out. This can feel confusing, stressful, and emotionally draining.
                            </p>
                            <p className='body-text light'>
                                Discernment counseling is designed specifically for this moment. It's a short-term process (typically 1–5 sessions) that helps you understand your options, explore what brought you here, and decide on a clear path forward.
                            </p>
                        </div>
                        <div className='half-width image-container border-radius box-shadow outline-dark'>
                            <img src={AboutDiscernmentTherapy} alt='Couple in listening to eachother' className="border-radius" />
                        </div>
                    </div>
                </div>

                <div className='full-width-center light-bg pad-tb-m'>
                    <div className='standard-width text-image-layout reverse'>
                        <div className='half-width image-container border-radius box-shadow outline-dark large-img'>
                            <img src={DiscernmentTherapyBenefit} alt='test' className="border-radius" />
                        </div>
                        <div className='half-width text-container'>
                            <h2 className='h2 dark'>Why Choose Discernment Counseling?</h2>
                            <p className='body-text dark'>
                                Discernment counseling may be a good fit if you're experiencing uncertainty about the future of your marriage. This approach is designed for couples where at least one partner is unsure, and you need clarity.
                            </p>
                            <h3 className='dark h4'>Is Discernment Counseling Right for You?</h3>
                            <ul className='body-text check-list-iconless'>
                                <li><CheckMark className="check-icon" aria-hidden="true" />One partner wants to end the marriage while the other wants to work on it</li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />You're stuck in limbo about whether to stay, leave, or try therapy</li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />You want clarity before making a major decision about your relationship</li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />Divorce has been mentioned but you're uncertain if it's the right choice</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='full-width-center pad-tb-m dark-bg'>
                    <div className='standard-width card-container'>
                        <h2 className='h2 light'>The Discernment Counseling Process</h2>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <GoalIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3'>Goal Setting</h3>
                            <p className='body-text'>Initial meeting (2 hours): Meet together to understand where each of you stands and what brought you to this point.</p>
                            <p className='body-text'>Individual time: Each partner shares their perspective privately with the therapist.</p>
                        </div>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <ProgressIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3'>Plan</h3>
                            <p className='body-text'>Explore each person's contributions to the relationship challenges.</p>
                            <p className='body-text'>Discuss the three possible paths openly and respectfully.</p>
                        </div>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <MonthIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3'>Follow Up</h3>
                            <p className='body-text'>Gain clarity on which path feels right for your relationship.</p>
                            <p className='body-text'>Leave with next steps—whatever direction you choose.</p>
                        </div>

                    </div>
                </div>
                <div className='full-width-center light-bg pad-tb-m faq-container'>
                    <div className='standard-width text-image-layout'>
                    <h2 className='h2 dark margin-bottom-m full-width-center'>Frequently Asked Questions</h2>

                        <div className='half-width'>
                            <Accordion
                                items={faqItems}
                            />
                        </div>
                        <div className='half-width image-container border-radius box-shadow outline-tupe large-img'>
                            <img src={FAQDiscernmentTherapy} alt='test' className="border-radius" />
                        </div>
                    </div>
                </div>

                <div className='full-width-center pad-tb-m style-bg-1 dark-bg cta-2'>
                    <div className='pad-s standard-width outline-light'>
                        <h2 className='h1 light'>Ready to Gain Clarity About Your Marriage?</h2>
                        <p className='body-text light'>Schedule a consultation to explore your options in a safe, structured setting</p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default DiscernmentCounseling;
