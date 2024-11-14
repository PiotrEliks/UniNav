import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Intranet.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/Intranet/img1.png';
import img2 from '../assets/Intranet/img2.png';
import img3 from '../assets/Intranet/img3.png';
import img4 from '../assets/Intranet/img4.png';
import img5 from '../assets/Intranet/img5.png';

const Intranet = () => {
  const { t } = useTranslation();
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  const language = localStorage.getItem("lng");
  return (
    <>
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
      <div className={styles.main}>
          <h1>{t('Intranet.Header')}</h1>
            <p>{t('Intranet.text1')} <a href="" target="_blank">link</a> {t('Intranet.text1a')} <a href="https://www.office365.amu.edu.pl/pierwsze_logowanie.htm" target="_blank">www</a></p>
            <img src={img1} alt="img1" className={styles.img} />
            <div className={styles.line}/>
            <p>{t('Intranet.text2')}</p>
            <img src={img2} alt="img2" className={styles.img} />
            <div className={styles.line}/>
            <p>{t('Intranet.text3')}</p>
            <img src={img3} alt="img3" className={styles.img} />
            <div className={styles.line}/>
            <p>{t('Intranet.text4')}</p>
            <img src={img4} alt="img4" className={styles.img} />
            <div className={styles.line}/>
            <p>{t('Intranet.text5')}</p>
            <img src={img5} alt="img5" className={styles.img} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Intranet