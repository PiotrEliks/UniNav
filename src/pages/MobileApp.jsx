import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './MobileApp.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../components/MetaDecorator.jsx';

const MobileApp = () => {
  const { t } = useTranslation();
  const [{ themeName, isContrast }] = useContext(ThemeContext);
  return (
    <>
      <MetaDecorator title={t('MobileApp.title')} />
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <div className={styles.top}>
          <h1>{t('MobileApp.Top.Header')}</h1>
          <p>{t('MobileApp.Top.Text')}</p>
          <button onClick={(e) => {
            e.preventDefault();
            window.open('https://daxpl.itch.io/uninav', '_blank');
            }}>
              {t('MobileApp.Top.Button')}
            </button>
          </div>
          <div className={styles.middle}>
            <h2>{t('MobileApp.Middle.Header1')}</h2>
            <p>{t('MobileApp.Middle.Text1')}</p>
            <h3>{t('MobileApp.Middle.Header2')}</h3>
            <ul>
              <li>{t('MobileApp.Middle.List1.l1')}</li>
              <li>{t('MobileApp.Middle.List1.l2')}</li>
              <li>{t('MobileApp.Middle.List1.l3')}</li>
            </ul>
            <h2>{t('MobileApp.Middle.Header3')}</h2>
            <p>{t('MobileApp.Middle.Text2')}</p>
            <ul>
              <li>{t('MobileApp.Middle.List2.l1')}</li>
              <li>{t('MobileApp.Middle.List2.l2')}</li>
            </ul>
          </div>
          <div className={styles.bottom}>

              <div className={styles.left}>
                <h2>{t('MobileApp.Left.Header')}</h2>
                <ul>
                  <li>{t('MobileApp.Left.List.l1')}</li>
                  <li>{t('MobileApp.Left.List.l2')}</li>
                  <li>{t('MobileApp.Left.List.l3')}</li>
                </ul>
              </div>
              <div className={styles.right}>
                <h2>{t('MobileApp.Right.Header')}</h2>
                <ul>
                <li>{t('MobileApp.Right.List.l1')}</li>
                <li>{t('MobileApp.Right.List.l2')}</li>
                </ul>
              </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MobileApp