// components/ServiceSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = ({
  id,
  title,
  description,
  image,
  alt,
  bgClass,
  outlineClass,
  titleColor,
  buttonClass,
  reverse,
  link
}) => {
  return (
    <div className={`full-width pad-tb-m ${bgClass}`} id={id}>
      <div className={`standard-width text-image-layout ${reverse ? 'reverse' : ''}`}>
        {/* When not reversed: text on left, image on right */}
        {!reverse ? (
          <>
            <div className="half-width text-container">
              <h2 className={`h2 ${titleColor}`}>{title}</h2>
              <p className="body-text dark">{description}</p>
              {link && (
                <Link to={link} className={`learn-more-btn ${buttonClass}`}>Learn More
                </Link>
              )}
            </div>
            <div className={`half-width image-container ${outlineClass} border-radius box-shadow`}>
              <img src={image} alt={alt} className="border-radius" />
            </div>
          </>
        ) : (
          /* When reversed: image on left, text on right */
          <>
            <div className={`half-width image-container ${outlineClass} border-radius box-shadow`}>
              <img src={image} alt={alt} className="border-radius" />
            </div>
            <div className="half-width text-container">
              <h2 className={`h2 ${titleColor}`}>{title}</h2>
              <p className="body-text dark">{description}</p>
              {link && (
                <Link to={link} className={`learn-more-btn ${buttonClass}`}>Learn More
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
