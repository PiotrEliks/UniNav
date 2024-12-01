import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageWithPlaceholder.css';

const ImageWithPlaceholder = ({ src, placeholderSrc, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-container ${className}`}>
      <img
        src={placeholderSrc}
        alt={alt}
        className={`image placeholder ${isLoaded ? 'hidden' : 'visible'}`}
      />
      <img
        src={src}
        alt={alt}
        className={`image ${isLoaded ? 'visible' : 'hidden'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

ImageWithPlaceholder.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

ImageWithPlaceholder.defaultProps = {
  alt: '',
  className: '',
};

export default ImageWithPlaceholder;
