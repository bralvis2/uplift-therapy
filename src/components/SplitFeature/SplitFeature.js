import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './SplitFeature.css';

const SplitFeature = ({
    title,
    subtitle,
    children,
    quote = false,
    image,
    imageAlt = '',
    imagePosition = 'center',
    linkText,
    linkTo,
    external = false,
    theme = 'olive',
    reverse = false,
    frame = true,
}) => {
    const classes = [
        'split',
        reverse ? 'split--reverse' : '',
        frame ? 'split--frame' : '',
    ].join(' ').trim();

    const linkContent = (
        <>
            {linkText} <ArrowRight size={16} aria-hidden="true" />
        </>
    );

    return (
        <section className={classes} data-theme={theme}>
            <div className="split__text">
                <h2 className="split__title">{title}</h2>
                {subtitle && <h3 className="split__subtitle">{subtitle}</h3>}

                {quote ? (
                    <blockquote className="split__copy">{children}</blockquote>
                ) : (
                    <div className="split__copy">{children}</div>
                )}

                {linkText && linkTo && (
                    external ? (
                        <a
                            href={linkTo}
                            className="split__button"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {linkContent}
                        </a>
                    ) : (
                        <Link to={linkTo} className="split__button">
                            {linkContent}
                        </Link>
                    )
                )}
            </div>

            <div className="split__media">
                <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    style={{ objectPosition: imagePosition }}
                />
            </div>
        </section>
    );
};

export default SplitFeature;