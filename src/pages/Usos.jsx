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

const Usos = () => {
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <>
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <h1>{t('Usos.header')}</h1>
          <p>{t('Usos.text1')}</p>
          <img src={img1} alt="img1" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text2')}</p>
          <img src={img2} alt="img2" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text3')}</p>
          <img src={img3} alt="img3" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text4')}</p>
          <img src={img4} alt="img4" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text5')}</p>
          <img src={img5} alt="img5" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text6')}</p>
          <img src={img6} alt="img6" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text7')}</p>
          <img src={img7} alt="img7" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text8')}</p>
          <img src={img8} alt="img8" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text9')}</p>
          <img src={img9} alt="img9" className={styles.img}/>
          <div className={styles.line}/>
          <p>{t('Usos.text10')}</p>
          <img src={img10} alt="img10" className={styles.img}/>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Usos