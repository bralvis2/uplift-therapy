import React, { Component } from 'react';
import { ReactComponent as CheckMark } from '../SVG-icons/check-mark-dark.svg';
import { ReactComponent as GoalIcon } from '../SVG-icons/goal.svg';
import { ReactComponent as ProgressIcon } from '../SVG-icons/progress.svg';
import { ReactComponent as MonthIcon } from '../SVG-icons/month.svg';
import AboutIPE from '../site-images/immigration-mental-health-evaluation.jpg';
import WhyIFS from '../site-images/Why-Choose-Discernment-Counseling.jpg';
import IFSfaq from '../site-images/faq-ifs-therapy.jpg';

import Accordion from "./Accordion";

import './Home.css';
import '../../App.css';
import './Services.css';

class IPE extends Component {
    render() {

        const faqItems = [
            {
                question: "What is an immigration psychological evaluation?",
                answer:
                    "An immigration psychological evaluation is a specialized forensic assessment documenting psychological factors relevant to immigration cases. Unlike general assessments, these address legal questions required by immigration law. Through clinical interviews and standardized testing, the evaluation examines your mental health history, trauma, and current symptoms. The report provides expert opinions on hardship, asylum, domestic violence, or trafficking, serving as official evidence."
            },
            {
                question: "How is this different from regular therapy?",
                answer:
                    "Immigration evaluations serve a different purpose than therapy. While therapy focuses on ongoing treatment and healing, an evaluation is a time-limited forensic assessment documenting your psychological state for legal purposes. The evaluation provides an objective assessment rather than emotional support, producing a formal report for legal authorities. Evaluations use standardized measures for legally relevant information, while therapy is flexible and individualized."
            },
            {
                question: "Will this evaluation affect my immigration case outcome?",
                answer:
                    "While no evaluation guarantees outcomes, research shows that applicants with professional psychological evaluations are nearly twice as likely to receive favorable decisions, with approval rates exceeding 80%. The evaluation provides objective clinical evidence that helps adjudicators understand your case's psychological dimensions, substantiates hardship or persecution claims, and adds professional credibility to your application."
            },
            {
                question: "What types of immigration cases require evaluations?",
                answer:
                    "Psychological evaluations support extreme hardship waivers, asylum claims, VAWA petitions for domestic violence survivors, U visas for crime victims, T visas for trafficking survivors, and cancellation of removal proceedings. Each case type requires documentation of specific psychological impacts—whether from family separation, persecution, abuse, crime victimization, or trafficking trauma. Your immigration attorney can determine whether an evaluation would strengthen your case."
            },
            {
                question: "How long does the evaluation process take?",
                answer:
                    "The complete process typically takes three to four weeks. The assessment involves two to three clinical interview sessions (90-120 minutes each) conducted via secure video conferencing over one to two weeks. I prepare a comprehensive report within 14 business days. Your attorney reviews a draft before finalization. Expedited evaluations are available for urgent deadlines."
            }
        ];

        return (
            <div>

                <div className='full-width pad-tb-m ipe-hero cta-2'>
                    <div className='standard-width'>
                        <h1 className='h1 light'>Immigration Psychological Evaluations</h1>
                        <p className='body-text light margin-bottom'>Comprehensive, trauma-informed evaluations that document your story and strengthen your immigration case with clinical evidence.</p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>

                <div className='full-width pad-tb-m dark-bg'>
                    <div className='standard-width text-image-layout'>
                        <div className='half-width text-container'>
                            <h2 className='h2 light'>Strengthen Your Immigration Case with Expert Psychological Evaluations</h2>
                            <p className='body-text light'>
                                Navigating an immigration case means countless hours gathering documentation, attending appointments, and seeking advocates who understand your situation. Whether you need to reinforce an asylum claim, document experiences of persecution or domestic violence, or provide evidence for a hardship waiver, I'm here to help.</p>
                            <p className='body-text light'>I help you tell your story and document the invisible scars that support your immigration case—providing the clinical evidence and compassionate care your case needs.</p>
                        </div>
                        <div className='half-width image-container border-radius box-shadow outline-dark'>
                            <img src={AboutIPE} alt='test' className="border-radius" />
                        </div>
                    </div>
                </div>

                <div className='full-width salt-400-bg pad-tb-m'>
                    <div className='standard-width text-image-layout reverse'>
                        <div className='half-width image-container border-radius box-shadow outline-olive-700 large-img'>
                            <img src={WhyIFS} alt='test' className="border-radius" />
                        </div>
                        <div className='half-width text-container'>
                            <h2 className='h2 dark'>Why Choose an Immigration Psychological Evaluation?
                            </h2>
                            <p className='body-text dark'>
                                Immigration psychological evaluations provide legally relevant clinical evidence that strengthens your case. These evaluations offer objective documentation of mental health conditions and psychological impacts, helping attorneys build compelling arguments and providing adjudicators with credible expert insight that enhances your application's overall strength and credibility.</p>
                            <h3 className='h4 dark'>Is an Immigration Psychological Evaluation Right for You?</h3>
                            <ul className='body-text check-list-iconless dark-icon dark'>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You're applying for an extreme hardship waiver based on family separation
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You're seeking asylum or refugee status due to persecution or trauma
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You're filing a VAWA self-petition for domestic violence survivors
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You're facing cancellation of removal proceedings
                                </li>
                                <li><CheckMark className="check-icon" aria-hidden="true" />
                                    You've experienced trauma related to migration, detention, or family separation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='full-width pad-tb-m olive-900-bg'>
                    <div className='standard-width card-container'>
                        <h2 className='h2 light'>The Immigration Psychological Evaluation Process</h2>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <GoalIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3 center'>Intake & Clinical History</h3>
                            <p className='body-text'>
                                The evaluation begins with a review of your immigration context and the legal questions your case presents. I conduct an in-depth exploration of your psychosocial history, trauma experiences, family relationships, and current mental health symptoms to establish what clinical documentation is needed.
                            </p>
                        </div>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <ProgressIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3'>Assessment & Clinical Findings</h3>
                            <p className='body-text'>
                                The clinical assessment includes structured interviews and standardized psychological measures to evaluate symptoms of depression, anxiety, PTSD, and other conditions. I formulate diagnostic impressions and analyze how symptoms impact your functioning, directly addressing legal standards relevant to your case.
                            </p>
                        </div>

                        <div className='light-bg pad-card text-container card-style-1 outline-dark'>
                            <MonthIcon className="process-icon" aria-hidden="true" />
                            <h3 className='h3'>Report Preparation & Ongoing Support</h3>
                            <p className='body-text'>
                            Within 14 business days, I prepare a detailed report that meets legal standards and connects clinical findings to your case requirements. I collaborate with your immigration attorney, reviewing a draft before finalization. Follow-up consultation is available if additional clarification is needed.</p>
                        </div>

                    </div>
                </div>
                <div className='full-width pad-tb-m t-banner'>
                    <div className='pad-s standard-width light-bg outline-coffee'>
                        <h2 className='h1'>Payment</h2>
                        <p className='body-text'>
                        Appointment time 2-3 hours per appointment.
                        The fee for the evaluation is $750.00.
                        To reserve an appointment, a $375.00 deposit (50% of the total fee) is required at the time of scheduling. This deposit will be applied toward the total cost of the evaluation.
                        The deposit is fully refundable if the appointment is canceled or rescheduled with at least 24 hours' notice. Cancellations made with less than 24 hours' notice will result in the forfeiture of the deposit.
                        The remaining balance of $375.00 is due at the time of the evaluation appointment.
                        </p>
                        <p className='body-text'>
                        La duración de cada cita es de 2 a 3 horas. 
                        El costo de la evaluación es de $750.00. 
                        Para reservar una cita, se requiere un depósito de $375.00 (el 50 % del costo total) al momento de programarla. Este depósito se acreditará al costo total de la evaluación. 
                        El depósito es totalmente reembolsable si la cita se cancela o se reprograma con al menos 24 horas de antelación. Las cancelaciones realizadas con menos de 24 horas de antelación conllevarán la pérdida del depósito. 
                        El saldo restante de $375.00 deberá abonarse al momento de la cita de evaluación.
                        </p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>
                <div className='full-width light-bg pad-tb-m faq-container'>
                    <div className='standard-width text-image-layout'>
                        <h2 className='h2 dark margin-bottom-m full-width'>Frequently Asked Questions</h2>
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

                <div className='full-width pad-tb-m style-bg-1 dark-bg cta-2'>
                    <div className='pad-s standard-width outline-light'>
                        <h2 className='h1 salt-400'>Let's Connect</h2>
                        <p className='body-text salt-400'>
                            If you're interested in exploring how an immigration evaluation can support your case, I invite you to reach out.
                            I'd love to walk this part of your journey with you—providing the clinical documentation and compassionate care that honors your experiences and strengthens your path forward.
                        </p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>

            </div>
        );
    }
}
export default IPE;