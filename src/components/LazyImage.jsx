import React, { useState } from 'react';
import styles from './LazyImage.module.css';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? styles.loaded : styles.loading}`}
      loading="lazy"
      onLoad={handleImageLoad}
    />
  );
};

export default LazyImage;
