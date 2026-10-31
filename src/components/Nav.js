import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../brand-images/uplift-therapy-logo-salt.svg';
import './Nav.css';
import '../App.css';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);   // <-- add this
    const location = useLocation();

    // Close mobile menu when resizing to desktop
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1025) {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Turn nav black after scrolling
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll(); // set correct state on mount / route change
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: 'About', path: '/about/' },
        {
            label: 'Services',
            dropdown: [
                { label: 'Couples Therapy', path: '/services/couples-therapy/' },
                { label: 'Discernment Counseling', path: '/services/discernment-counseling/' },
                { label: 'Family Therapy', path: '/services/family-therapy/' },
                { label: 'IFS Therapy', path: '/services/ifs-therapy/' },
                { label: 'Individual Therapy', path: '/services/individual-therapy/' },
                { label: 'EMDR Therapy', path: '/services/emdr-therapy/' },
                { label: 'Immigration Evaluation', path: '/services/immigration-psychological-evaluation/' }
            ]
        },
        { label: 'Rates', path: '/costs/' },
        { label: 'Book Now', path: 'https://rosa-torres.clientsecure.me/', external: true }
    ];

    // Determine if we're on a services-related page
    const isServicesActive = location.pathname.startsWith('/services');


    return (
        <div className={`full-width nav-container center-center ${scrolled || isMobile ? 'nav-scrolled' : ''}`}>
            <nav className="main-navbar">
                <div className="logo-item">
                    <Link
                        to="/"
                        aria-label="Uplift Therapy Home"
                        onClick={() => setIsMobile(false)}
                    >
                        <img src={logo} alt="Uplift Therapy, Lincoln, Nebraska" />
                    </Link>

                </div>

                <ul className={isMobile ? 'nav-links-mobile open' : 'main-nav-links'}>
                    {links.map((link, idx) => (
                        <li key={idx} className={link.dropdown ? 'dropdown' : ''}>
                            {link.dropdown ? (
                                <>
                                    {/* Parent Services link */}
                                    <NavLink
                                        to="/services/"
                                        className={({ isActive }) =>
                                            `dropdown-btn ${isActive || isServicesActive ? 'active' : ''}`
                                        }
                                        onClick={() => setIsMobile(false)} // close mobile menu when clicked
                                    >
                                        {link.label}
                                    </NavLink>

                                    {/* Always open on mobile */}
                                    <ul
                                        className={`dropdown-menu ${isMobile ? 'open' : ''
                                            }`}
                                    >
                                        {link.dropdown.map((item, i) => (
                                            <li key={i}>
                                                <NavLink
                                                    to={item.path}
                                                    end
                                                    className={({ isActive }) =>
                                                        isActive ? 'active' : ''
                                                    }
                                                    onClick={() => setIsMobile(false)}
                                                >
                                                    {item.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : link.external ? (
                                <a
                                    href={link.path}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    onClick={() => setIsMobile(false)}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <NavLink
                                    to={link.path}
                                    end
                                    className={({ isActive }) =>
                                        `main-nav-link ${isActive ? 'active' : ''}`
                                    }
                                    onClick={() => setIsMobile(false)}
                                >
                                    {link.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                <button
                    className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}
                    aria-label={isMobile ? 'Close Menu' : 'Open Menu'}
                    aria-expanded={isMobile}
                >
                    {isMobile ? <i className="fa fa-xmark">&#10005;</i> : <i className="fa fa-bars"></i>}
                </button>
            </nav>
        </div>
    );
};

export default Nav;
