import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './MobileApp.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const MobileApp = () => {
  const { t } = useTranslation();
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  return (
    <>
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <h1>{t('MobileApp.Header')}</h1>
          <p>Info o aplikacji</p>

          <p>Link do pobierania</p>
          <div className={styles.wavyLine} />
          <p>Może jakiś tutorial</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MobileApp