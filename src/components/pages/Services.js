// components/pages/Services.js
import React, { Component } from 'react';
import ServiceSection from '../ServiceSection';

import CouplesTherapy from '../site-images/couples-therapy-session-in-lincoln-ne.jpg';
import FamilyTherapy from '../site-images/strengthening-family-relationships.jpg';
import IndividualTherapy from '../site-images/individual-counseling-session.jpg';
import DiscernmentTherapy from '../site-images/couple-considering-relationship-decisions.jpg';
import IFSTherapy from '../site-images/internal-family-systems-counseling.jpg';
import EMDRTherapy from '../site-images/eye-movement-desensitization-therapy.jpg';
import ImmigrationTraining from '../site-images/immigration-mental-health-evaluation.jpg';

import './Home.css';
import '../../App.css';
import './Services.css';

class Services extends Component {
    render() {
        const services = [
            {
                id: 'couples-therapy',
                title: 'Couples Therapy',
                description:
                    'Strengthen your relationship and rebuild connection through our specialized couples therapy services. We help partners improve communication, resolve conflicts, and deepen intimacy using Gottman and attachment interventions. Whether you’re facing challenges or simply want to enhance your partnership, our experienced therapists provide a nonjudgmental space for couples to heal and grow together.',
                image: CouplesTherapy,
                alt: 'Couple Laughing on a Therapist couch',
                bgClass: 'light-bg',
                outlineClass: 'outline-tan',
                titleColor: 'tan-2',
                buttonClass: 'tan-learn-more',
                link: '/services/couples-therapy/',
            },
            {
                id: 'discernment-counseling',
                title: 'Discernment Counseling',
                description:
                    'Discernment counseling offers clarity for couples who are uncertain about the future of their relationship. This specialized short-term approach helps partners decide whether to try to restore the relationship or end the relationship. Whether you’re considering reconciliation, separation, or divorce, our therapists provide a structured, supportive process to help you make the best decision for your future.',
                image: DiscernmentTherapy,
                alt: 'Couple holding hands during therapy session',
                bgClass: 'tupe-light-bg',
                outlineClass: 'outline-tupe',
                titleColor: 'tupe-dark',
                buttonClass: 'tupe-dark-learn-more',
                link: '/services/discernment-counseling/',
            },
            {
                id: 'family-therapy',
                title: 'Family Therapy',
                description:
                    'Our family therapy services help families navigate conflict, improve communication, and strengthen bonds across generations. We create a supportive environment where each family member’s perspective is valued, addressing issues like behavioral challenges, life transitions, and relationship dynamics. Through collaborative therapeutic approaches, we help families develop healthier patterns and build lasting resilience together.',
                image: FamilyTherapy,
                alt: 'Family hugging and smiling with one another',
                bgClass: 'light-bg',
                outlineClass: 'outline-tan',
                titleColor: 'tan-2',
                buttonClass: 'tan-learn-more',
                link: '/services/family-therapy/',
            },
            {
                id: 'individual-therapy',
                title: 'Individual Therapy',
                description:
                    'Whether you’re navigating anxiety, depression, life transitions, or personal growth, our individual therapy services provide a safe, confidential space for healing. As trained licensed Marriage and Family Therapists, we view individual therapy through a systemic lens—because how we connect, communicate, and attach deeply shapes our emotional health. Together, we’ll identify patterns, strengthen insight, and help you respond to life with greater stability and intention.',
                image: IndividualTherapy,
                alt: 'Woman smiling as she speaks with a therapist',
                bgClass: 'tupe-light-bg',
                outlineClass: 'outline-tupe',
                titleColor: 'tupe-dark',
                buttonClass: 'tupe-dark-learn-more',
                link: '/services/individual-therapy/',
            },
            {
                id: 'ifs-therapy',
                title: 'Internal Family Systems (IFS) Therapy',
                description:
                    'Experience transformative healing through Internal Family Systems therapy, a powerful approach that helps you understand and harmonize the different parts of your inner world. IFS therapy addresses trauma, anxiety, depression, and relationship issues by fostering self-compassion and internal balance. Our trained IFS therapists guide you toward greater self-awareness, emotional healing, and authentic living.',
                image: IFSTherapy,
                alt: 'Woman smiling as she speaks with a therapist',
                bgClass: 'light-bg',
                outlineClass: 'outline-tan',
                titleColor: 'tan-2',
                buttonClass: 'tan-learn-more',
                link: '/services/ifs-therapy/',
            },
            {
                id: 'emdr-therapy',
                title: 'EMDR Therapy',
                description:
                    'EMDR (Eye Movement Desensitization and Reprocessing) therapy offers effective relief from trauma, PTSD, anxiety, and distressing memories. This evidence-based treatment helps your brain reprocess difficult experiences, reducing their emotional impact and empowering you to move forward. Our certified EMDR therapists provide compassionate, specialized care to help you achieve lasting healing and peace.',
                image: EMDRTherapy,
                alt: 'Family hugging and smiling with one another',
                bgClass: 'tupe-light-bg',
                outlineClass: 'outline-tupe',
                titleColor: 'tupe-dark',
                buttonClass: 'tupe-dark-learn-more',
                link: '/services/emdr-therapy/',
            },
            {
                id: 'ipe',
                title: 'Immigration Psychological Evaluations',
                description:
                    "Navigating an immigration case means countless hours gathering documentation, attending appointments, and seeking advocates who understand your situation. Whether you need to reinforce an asylum claim, document experiences of persecution or domestic violence, or provide evidence for a hardship waiver, I'm here to help.",
                image: ImmigrationTraining,
                alt: 'Therapist talking with client in office',
                bgClass: 'light-bg',
                outlineClass: 'outline-tan',
                titleColor: 'tan-2',
                buttonClass: 'tan-learn-more',
                link: '/services/immigration-psychological-evaluation/',
            },
        ];

        return (
            <div>
                {/* Hero Section */}
                <div
                    className="full-width service-hero pad-tb-l"
                    role="img"
                    aria-label="Professional Therapy Services in Lincoln, Nebraska"
                >
                    <div className="hub-hero-width">
                        <h1 className="light">Professional Therapy <br />Services in Lincoln, Nebraska</h1>
                        <p className="hero-subtitle light">
                            Supporting your journey toward healing and growth through individual therapy,
                            couples counseling, and family therapy.
                        </p>
                    </div>
                </div>

                {/* Alternating Service Sections */}
                {services.map((service, index) => (
                    <ServiceSection key={service.id} {...service} reverse={index % 2 !== 0} />
                ))}

                <div className='full-width pad-tb-m style-bg-1 dark-bg cta-2' >
                    <div className='pad-s standard-width outline-light'>
                        <h2 className='h1 light'>Not sure which service is right for you?</h2>
                        <p className='body-text light'>Contact us today to schedule a consultation and discover how our compassionate, evidence-based therapy services in Lincoln can support you and your loved ones.</p>
                        <a href='https://rosa-torres.clientsecure.me/' target='_blank' rel="noreferrer noopener" className='btn-tan'>Book Now</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Services;
