import React, { Component } from 'react';
import { ReactComponent as CheckMark } from '../assets/SVG-icons/check-mark-dark.svg';
import { ReactComponent as GoalIcon } from '../assets/SVG-icons/goal.svg';
import { ReactComponent as ProgressIcon } from '../assets/SVG-icons/progress.svg';
import { ReactComponent as MonthIcon } from '../assets/SVG-icons/month.svg';
import EMDRAbout from '../assets/site-images/eye-movement-desensitization-therapy.jpg';
import whyEMDR from '../assets/site-images/Why-Choose-EMDR-Therapy.jpg';
import FAQEMDR from '../assets/site-images/faq-EMDR-therapy.jpg';

import Accordion from "../components/Accordion";

import './Home.css';
import '../App.css';
import './Services.css';

class EMDRTherapy extends Component {
  render() {

    const faqItems = [
      {
        question: "How is EMDR different from regular talk therapy?",
        answer:
          "EMDR doesn't require you to talk in detail about traumatic events. Instead, it works directly with how memories are stored in your brain. While you briefly focus on a distressing memory, bilateral stimulation helps your brain reprocess it naturally. Many people find EMDR faster and less emotionally exhausting than traditional trauma therapy."
      },
      {
        question: "Does EMDR really work? Is it evidence-based?",
        answer:
          "Yes. EMDR is recognized as an evidence-based treatment by major organizations including the World Health Organization, the American Psychological Association, and the U.S. Department of Veterans Affairs. Extensive research shows EMDR is highly effective for PTSD, trauma, anxiety, and related conditions—often producing results more quickly than other therapeutic approaches."
      },
      {
        question: "What does bilateral stimulation feel like?",
        answer:
          "Bilateral stimulation is gentle and non-invasive. Most commonly, you'll follow the therapist's hand movements with your eyes, moving them back and forth. Some therapists use tapping or audio tones instead. The experience is calming for most people, and you remain fully aware and in control throughout."
      },
      {
        question: "Will EMDR make me forget my traumatic memories?",
        answer:
          " No. EMDR doesn't erase memories. Instead, it changes how your brain stores and relates to them. After successful EMDR treatment, you'll still remember what happened, but it will no longer trigger the same intense emotional and physical reactions. The memory becomes integrated as part of your past rather than something that haunts your present."
      },
      {
        question: "How long does EMDR therapy take?",
        answer:
          "The length of EMDR therapy varies depending on what you're working through. Some people experience significant relief in 6-12 sessions for a single traumatic event, while complex trauma may require longer treatment. EMDR is often faster than traditional talk therapy, but we'll work at a pace that feels safe and effective for you."
      }

    ];

    return (
      <div>

        <div className='full-width-center pad-t-l pad-b-m hero-pad ifs-hero coffee-900-bg'>
          <div className='standard-width'>
            <h1 className='h1 light'>EMDR Therapy</h1>
            <p className='body-text light margin-bottom'>Evidence-Based Healing for Trauma and Distressing Life Experiences</p>
            <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
          </div>
        </div>

        <div className='full-width-center pad-tb-m dark-bg'>
          <div className='standard-width text-image-layout'>
            <div className='half-width text-container'>
              <h2 className='h2 light'>About EMDR Therapy</h2>
              <p className='body-text light'>When traumatic or distressing events occur, the brain typically processes and integrates these experiences into memory. However, sometimes these memories remain unprocessed—leading to intrusive thoughts, emotional triggers, and negative beliefs that impact daily functioning.</p>
              <p className='body-text light'>Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapy that facilitates the brain's natural healing process through bilateral stimulation, such as guided eye movements. Rather than erasing memories, EMDR helps reprocess them so they can be integrated adaptively, reducing their emotional intensity and allowing you to move forward.
              </p>
            </div>
            <div className='half-width image-container border-radius box-shadow outline-dark'>
              <img src={EMDRAbout} alt='test' className="border-radius" />
            </div>
          </div>
        </div>

        <div className='full-width-center salt-400-bg pad-tb-m'>
          <div className='standard-width text-image-layout reverse'>
            <div className='half-width image-container border-radius box-shadow outline-olive-700 large-img'>
              <img src={whyEMDR} alt='test' className="border-radius" />
            </div>
            <div className='half-width text-container'>
              <h2 className='h2 dark'>Why Choose EMDR Therapy?</h2>
              <p className='body-text dark'>
                EMDR is one of the most thoroughly researched and effective treatments for trauma and PTSD, recognized by the World Health Organization, the American Psychological Association, and the Department of Veterans Affairs. It offers a structured, efficient path to healing that doesn't require you to talk through every detail of what happened.
              </p>
              <h3 className='h4 dark'>Is EMDR Therapy Right for You?</h3>
              <ul className='body-text check-list-iconless dark-icon dark'>
                <li><CheckMark className="check-icon" aria-hidden="true" />
                  You're experiencing symptoms of trauma or PTSD
                </li>
                <li><CheckMark className="check-icon" aria-hidden="true" />
                  You have intrusive thoughts or memories that won't go away
                </li>
                <li><CheckMark className="check-icon" aria-hidden="true" />
                  You struggle with anxiety, panic attacks, or hypervigilance
                </li>
                <li><CheckMark className="check-icon" aria-hidden="true" />
                  You carry negative beliefs about yourself from past experiences
                </li>
                <li><CheckMark className="check-icon" aria-hidden="true" />
                  You want effective trauma treatment without extensive talk therapy
                </li>
                <li><CheckMark className="check-icon" aria-hidden="true" />
                  You've experienced grief, loss, or difficult life transitions that feel unresolved
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='full-width-center pad-tb-m olive-900-bg'>
          <div className='standard-width card-container'>
            <h2 className='h2 light'>The EMDR Therapy Process</h2>

            <div className='light-bg pad-card text-container card-style-1 outline-dark'>
              <GoalIcon className="process-icon" aria-hidden="true" />
              <h3 className='h3 center'>History & Preparation</h3>
              <p className='body-text'>
                We begin by understanding your history and identifying which memories or experiences are causing distress. This foundation helps us create a safe, personalized treatment plan.</p>
              <p className='body-text'>You'll learn grounding and coping techniques to help you feel stable and in control throughout the process. EMDR moves at your pace—you're always in the driver's seat.              </p>
            </div>

            <div className='light-bg pad-card text-container card-style-1 outline-dark'>
              <ProgressIcon className="process-icon" aria-hidden="true" />
              <h3 className='h3'>Reprocessing & Integration</h3>
              <p className='body-text'>
                During EMDR sessions, you'll briefly focus on a troubling memory while following bilateral stimulation (typically eye movements). This activates your brain's natural healing process.</p>
              <p className='body-text'>As your brain reprocesses the memory, the emotional intensity decreases and the memory becomes easier to integrate into your life story. Negative beliefs shift toward more adaptive, positive ones.              </p>
            </div>

            <div className='light-bg pad-card text-container card-style-1 outline-dark'>
              <MonthIcon className="process-icon" aria-hidden="true" />
              <h3 className='h3'>Resolution & Ongoing Support</h3>
              <p className='body-text'>
                Over time, memories that once felt overwhelming become neutral—you can recall them without the same emotional charge or physical response.
              </p><p className='body-text'>We'll ensure that progress is sustained and address any remaining concerns, so you can move forward with greater peace, confidence, and emotional freedom.
              </p>            </div>

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
              <img src={FAQEMDR} alt='test' className="border-radius" />
            </div>
          </div>
        </div>

        <div className='full-width-center pad-tb-m style-bg-1 coffee-900-bg cta-2'>
          <div className='pad-s standard-width outline-light'>
            <h2 className='h1 light'>Ready to Find Relief from Past Trauma?</h2>
            <p className='body-text light'>
              Begin EMDR therapy and discover how your brain's natural healing can set you free            </p>
            <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
          </div>
        </div>

      </div>
    );
  }
}

export default EMDRTherapy;
