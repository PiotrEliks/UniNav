import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Intranet.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';

const Intranet = () => {
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  return (
    <>
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <div className={styles.top}>
            top
          </div>
          <div className={styles.middle}>
            middle
          </div>
          <div className={styles.bottom}>
            bottom
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Intranet