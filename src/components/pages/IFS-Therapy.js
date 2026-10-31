import React, { Component } from 'react';
import { ReactComponent as CheckMark } from '../SVG-icons/check-mark-dark.svg';
import { ReactComponent as GoalIcon } from '../SVG-icons/goal.svg';
import { ReactComponent as ProgressIcon } from '../SVG-icons/progress.svg';
import { ReactComponent as MonthIcon } from '../SVG-icons/month.svg';
import AboutIFS from '../site-images/woman-happy-to-speak-with-ifs-therapist.jpg';
import WhyIFS from '../site-images/Why-Choose-IFS-Therapy.jpg';
import IFSfaq from '../site-images/faq-ifs-therapy.jpg';

import Accordion from "./Accordion";

import './Home.css';
import '../../App.css';
import './Services.css';

class IFSTherapy extends Component {
    render() {

        const faqItems = [
            {
                question: "What exactly are 'parts' in IFS therapy?",
                answer:
                    "Parts are the different aspects of your personality—like the inner critic, the people-pleaser, the anxious part, or the part that shuts down when overwhelmed. They're not disorders or problems; they're natural responses your mind created to protect you. In IFS, we help these parts feel heard and understood so they can relax and work together more harmoniously."
            },
            {
                question: "How is IFS therapy different from other types of therapy?",
                answer:
                    "Unlike traditional therapy that might focus on symptoms or behaviors, IFS treats all parts of you with respect and curiosity. Rather than trying to eliminate difficult thoughts or feelings, IFS helps you understand why they exist and what they need. It's a gentle, non-pathologizing approach that empowers you to heal from within."
            },
            {
                question: "Is IFS therapy effective for trauma?",
                answer:
                    "Yes. IFS is recognized as an evidence-based treatment for trauma. It's particularly effective because it doesn't force you to relive traumatic memories. Instead, we work with the parts that carry trauma at a pace that feels safe, allowing your protective parts to relax gradually as healing occurs."
            },
            {
                question: "How long does IFS therapy take?",
                answer:
                    "The length of IFS therapy varies based on your goals and what you're working through. Some people experience significant shifts in a few months, while deeper healing—especially from complex trauma—may take longer. We'll work at a pace that feels right for you and your parts."
            }
        ];

        return (
            <div>

                <div className='full-width-center pad-t-l pad-b-m hero-pad ifs-hero dark-bg'>
                    <div className='standard-width'>
                        <h1 className='h1 light'>Internal Family Systems (IFS) Therapy</h1>
                        <p className='body-text light margin-bottom'>Healing by Understanding All the Parts of You</p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>

                <div className='full-width-center pad-tb-m dark-bg'>
                    <div className='standard-width text-image-layout'>
                        <div className='half-width text-container'>
                            <h2 className='h2 light'>About Internal Family Systems Therapy</h2>
                            <p className='body-text light'>
                                Internal Family Systems (IFS) therapy recognizes that our minds naturally consist of different "parts," each with its own perspective, feelings, and role. These parts develop to help us cope with challenges and shield us from pain. Sometimes, however, they can feel in conflict with each other, keeping us stuck in patterns that no longer serve us.
                                IFS helps you better understand yourself, so you can live with more confidence, self-compassion and internal balance.                          </p>
                        </div>
                        <div className='half-width image-container border-radius box-shadow outline-dark'>
                            <img src={AboutIFS} alt='test' className="border-radius" />
                        </div>
                    </div>
                </div>

                <div className='full-width-center salt-400-bg pad-tb-m'>
                    <div className='standard-width text-image-layout reverse'>
                        <div className='half-width image-container border-radius box-shadow outline-olive-700 large-img'>
                            <img src={WhyIFS} alt='test' className="border-radius" />
                        </div>
                        <div className='half-width text-container'>
                            <h2 className='h2 dark'>Why Choose IFS Therapy</h2>
                            <p className='body-text dark'>
                                IFS therapy is effective for addressing a wide range of emotional and psychological challenges, from managing overwhelming emotions to healing past traumas without retraumatization. This approach helps you improve your relationship with yourself and others by understanding the protective roles your parts play. Through IFS, you can build greater self-compassion, inner harmony, and lasting resilience.                            </p>
                            <h3 className='h4 dark'>Is IFS Therapy Right for You?</h3>
                            <ul className='body-text check-list-iconless dark-icon dark'>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You feel stuck in patterns of self-criticism, anxiety, or self-sabotage
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    Different parts of you seem to be in constant conflict
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You struggle with overwhelming emotions that feel hard to control
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You want to heal from past trauma with a gentle, non-retraumatizing approach
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You're seeking deeper self-understanding and lasting personal growth
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='full-width-center pad-tb-m olive-900-bg'>
                    <div className='standard-width card-container'>
                        <h2 className='h2 light'>The Internal Family Systems Therapy Process</h2>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <GoalIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3 center'>Identify and Understand</h3>
                            <p className='body-text'>
                                We begin by identifying your parts by noticing the different feelings, voices, and reactions you carry. Together, we'll understand the role each part plays, recognizing that every part has a positive intention, even when its actions cause distress.
                            </p>
                        </div>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <ProgressIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3'>Build Compassion</h3>
                            <p className='body-text'>
                                You'll learn to build compassion for your parts by listening to them rather than judging them. This shift from criticism to curiosity creates space for real healing and change.
                            </p>
                        </div>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <MonthIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3'>Connect with Your Self</h3>
                            <p className='body-text'>
                                As you develop compassion for your parts, you'll connect more deeply with your core Self, the calm, wise, and compassionate place inside you. From this grounded place, you can help your parts heal and find new, healthier ways of protecting you.Retry                            </p>
                        </div>

                    </div>
                </div>
                <div className='full-width-center light-bg pad-tb-m faq-container'>
                    <div className='standard-width text-image-layout'>
                    <h2 className='h2 dark margin-bottom-m full-width-center'>Frequently Asked Questions</h2>
                        <div className='half-width'>
                            <Accordion
                                items={faqItems}
                                faqBgColor="tan-light-bg"  
                                questionColor="dark"         
                            />
                        </div>
                        <div className='half-width image-container border-radius box-shadow outline-tan large-img'>
                            <img src={IFSfaq} alt='test' className="border-radius" />
                        </div>
                    </div>
                </div>

                <div className='full-width-center pad-tb-m style-bg-1 dark-bg cta-2'>
                    <div className='pad-s standard-width outline-light'>
                        <h2 className='h1 light'>Ready to Understand and Heal All Parts of Yourself?</h2>
                        <p className='body-text light'>
                            Begin your IFS therapy journey in a safe, compassionate space where all of you is welcome
                        </p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default IFSTherapy;
