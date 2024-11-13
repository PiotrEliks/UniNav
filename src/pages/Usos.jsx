import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Usos.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/USOS/img1.png';
import img2 from '../assets/USOS/img2.png';
import img3 from '../assets/USOS/img3.png';
import img4 from '../assets/USOS/img4.png';
import img5 from '../assets/USOS/img5.png';
import img6 from '../assets/USOS/img6.png';
import img7 from '../assets/USOS/img7.png';
import img8 from '../assets/USOS/img8.png';
import img9 from '../assets/USOS/img9.png';
import img10 from '../assets/USOS/img10.png';
import img1en from '../assets/USOS/img1en.png';
import img2en from '../assets/USOS/img2en.png';
import img3en from '../assets/USOS/img3en.png';
import img4en from '../assets/USOS/img4en.png';
import img5en from '../assets/USOS/img5en.png';
import img6en from '../assets/USOS/img6en.png';
import img7en from '../assets/USOS/img7en.png';
import img8en from '../assets/USOS/img8en.png';
import img9en from '../assets/USOS/img9en.png';
import img10en from '../assets/USOS/img10en.png';

const Usos = () => {
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  const { t } = useTranslation();
  const language = localStorage.getItem("lng");
  return (
    <>
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <h1>{t('Usos.header')}</h1>
          <p>{t('Usos.text1')} <a href='https://usosweb.amu.edu.pl/' target='_blank'>link</a>{t('Usos.text1a')}</p>
          <img src={language === 'pl' ? img1 : img1en} alt="img1" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text2')}</p>
          <img src={language === 'pl' ? img2 : img2en} alt="img2" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text3')}</p>
          <img src={language === 'pl' ? img3 : img3en} alt="img3" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text4')}</p>
          <img src={language === 'pl' ? img4 : img4en} alt="img4" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text5')}</p>
          <img src={language === 'pl' ? img5 : img5en} alt="img5" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text6')}</p>
          <img src={language === 'pl' ? img6 : img6en} alt="img6" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text7')}</p>
          <img src={language === 'pl' ? img7 : img7en} alt="img7" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text8')}</p>
          <img src={language === 'pl' ? img8 : img8en} alt="img8" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text9')} <a href='https://uam.sharepoint.com/sites/4203000000/SitePages/Plany-Zajec.aspx' target='_blank'>Intranecie</a>.</p>
          <img src={language === 'pl' ? img9 : img9en} alt="img9" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text10')}</p>
          <img src={language === 'pl' ? img10 : img10en} alt="img10" className={styles.img}/>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Usos