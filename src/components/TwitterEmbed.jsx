import React, { useContext, useState, useEffect } from 'react';
import { Timeline } from 'react-twitter-widgets';
import styles from './TwitterEmbed.module.css';
import { ThemeContext } from '../contexts/theme.jsx';
import Loader from './Loader.jsx';
import { useMediaQuery } from 'react-responsive';

const TwitterEmbed = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const isWidth375 = useMediaQuery({ query: '(max-width: 375px)' });
  const isWidth768 = useMediaQuery({ query: '(max-width: 768px)' });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [width, setWidth] = useState('40rem');
  const [height, setHeight] = useState(600);

  useEffect(() => {
    setLoading(true);
    if (isWidth375) {
      setWidth('25rem');
      setHeight(400);
    } else if (isWidth768) {
      setWidth('30rem');
      setHeight(500);
    } else {
      setWidth('40rem');
      setHeight(600);
    }
  }, [isWidth375, isWidth768]);

  useEffect(() => {
    setLoading(true);
    setError(null);
  }, [themeName]);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = (err) => {
    console.error(err);
    setError('Error');
    setLoading(false);
  };

  const key = `${themeName}-${width}`;

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.spinnerContainer}>
          <Loader />
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
      <Timeline
        key={key}
        dataSource={{
          sourceType: 'profile',
          screenName: 'UAM_Poznan',
        }}
        options={{
          width: width,
          height: height,
          chrome: 'noheader nofooter noborders noscrollbar',
          tweetLimit: 2,
          theme: themeName,
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default TwitterEmbed;
