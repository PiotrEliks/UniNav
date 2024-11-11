import React, { useContext, useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styles from './TwitterEmbed.module.css';
import { ThemeContext } from '../contexts/theme.jsx';
import Loader from './Loader.jsx'

const TwitterEmbed = () => {
  const [{ themeName, isContrast }] = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
  }, [themeName]);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = (err) => {
    console.error(err);
    setError('Wystąpił błąd podczas ładowania tweetów.');
    setLoading(false);
  };
  return (
    <div className={styles.container}>
       {loading && (
        <div className={styles.spinnerContainer}>
          <Loader />
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
      <TwitterTimelineEmbed
        key={themeName}
        sourceType="profile"
        screenName="UAM_Poznan"
        options={{
          width: '40rem',
          height: 600,
        }}
        noHeader="false"
        noBorders="false"
        noFooter="false"
        noScrollbar="true"
        data-tweet-limit="2"
        theme={themeName}
        onLoad={handleLoad}
        onError={handleError}
      />

    </div>
  );
};

export default TwitterEmbed;
