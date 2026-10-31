import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceGrid.css';

// KEEP YOUR OWN WORKING IMAGE IMPORTS HERE
import couplesImg from '../../assets/site-images/home-couple.png';
import familyImg from '../../assets/site-images/home-family.png';
import individualImg from '../../assets/site-images/home-individual.png';
import ifsImg from '../../assets/site-images/internal-family-systems-counseling.jpg';
import emdrImg from '../../assets/site-images/eye-movement-desensitization-therapy.jpg';
import disImg from '../../assets/site-images/couple-in-difficult-conversation.jpg';
import imImg from '../../assets/site-images/immigration-mental-health-evaluation.jpg';


const services = [
    {
        title: 'Couples Therapy',
        path: '/services/couples-therapy/',
        image: couplesImg,
        blurb: 'Reconnect with your partner, rebuild friendship and intimacy, and work through past hurts.',
    },
    {
        title: 'Individual Therapy',
        path: '/services/individual-therapy/',
        image: individualImg,
        blurb: 'A personal journey toward growth, deeper self-understanding, and greater life satisfaction.',
    },
    {
        title: 'Family Therapy',
        path: '/services/family-therapy/',
        image: familyImg,
        blurb: 'Improve communication, problem-solving, and connection when stress strains family life.',
    },
    {
        title: 'IFS Therapy',
        path: '/services/ifs-therapy/',
        image: ifsImg, // TODO: replace with IFS image
        blurb: 'Build a healthier relationship with the different parts of yourself through Internal Family Systems therapy.',
    },
    {
        title: 'EMDR Therapy',
        path: '/services/emdr-therapy/',
        image: emdrImg, // TODO: replace with EMDR image
        blurb: 'A structured, trauma-informed approach to processing distressing memories and easing their hold on you.',
    },
    {
        title: 'Discernment Counseling',
        path: '/services/discernment-counseling/',
        image: disImg, // TODO: replace with discernment image
        blurb: 'Short-term support for couples unsure about the future of their relationship, to help you find clarity.',
    },
    {
        title: 'Immigration Evaluation',
        path: '/services/immigration-psychological-evaluation/',
        image: imImg, // TODO: replace with immigration evaluation image
        blurb: 'Thorough, compassionate psychological evaluations to support immigration cases.',
    },
];

const ServiceGrid = () => {
    return (
        <section className="service-grid">
            <header className="service-grid__header">
                <p className="service-grid__eyebrow">Our Clinical Focus</p>
                <h2 className="service-grid__heading">Therapy Services in Lincoln, NE</h2>
            </header>

            <ul className="service-grid__list">
                {services.map(({ title, path, image, blurb }) => (
                    <li key={path}>
                        <Link to={path} className="service-grid__card">
                            <img
                                className="service-grid__bg"
                                src={image}
                                alt=""
                                loading="lazy"
                            />
                            <div className="service-grid__content">
                                <h3>{title}</h3>
                                <p className='body-text-xs'>{blurb}</p>
                                <span className="service-grid__cta">
                                    Learn more <ArrowRight size={16} aria-hidden="true" />
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ServiceGrid;