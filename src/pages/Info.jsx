import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Info.module.css';
import PageNav from '../components/PageNav.jsx';
import Footer from '../components/Footer.jsx';
import { useTranslation } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  return (
    <>
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.left}>
              <h1>{t('Info.Header')}</h1>
              <h2></h2>
              <p></p>
              <h2></h2>
              <p></p>
            </div>
            <div className={styles.right}>
              <p>prawy</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Info