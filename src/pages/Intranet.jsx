import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Intranet.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import LazyImage from '../components/LazyImage';
import img1 from '../assets/Intranet/img1.png';
import img2 from '../assets/Intranet/img2.png';
import img3 from '../assets/Intranet/img3.png';
import img4 from '../assets/Intranet/img4.png';
import img5 from '../assets/Intranet/img5.png';
import MetaDecorator from '../components/MetaDecorator.jsx';

const Intranet = () => {
  const { t } = useTranslation();
  const [{ themeName, isContrast }] = useContext(ThemeContext);

  const images = [
    { pl: img1, alt: 'img1' },
    { pl: img2, alt: 'img2' },
    { pl: img3, alt: 'img3' },
    { pl: img4, alt: 'img4' },
    { pl: img5, alt: 'img5' },
  ];

  const texts = [
    { key: 'Intranet.text1', link: 'https://uam.sharepoint.com/sites/Intranet' },
    { key: 'Intranet.text2' },
    { key: 'Intranet.text3' },
    { key: 'Intranet.text4' },
    { key: 'Intranet.text5' },
  ];

  return (
    <>
      <MetaDecorator title={t('Intranet.title')} />
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
      <div className={styles.main}>
          <h1>{t('Intranet.Header')}</h1>
            {images.map((image, index) => (
            <div key={index} className={styles.container}>
              <div className={styles.content}>
                {texts[index].link ? (
                  <>
                    <p>{t(texts[index].key)} <a href={texts[index].link} target='_blank' rel="noopener noreferrer">link</a>
                    {texts[index].key === 'Intranet.text1' && <>{t('Intranet.text1a')} <a href='https://www.office365.amu.edu.pl/pierwsze_logowanie.htm' target='_blank' rel="noopener noreferrer">www</a></>}</p>
                  </>
                ) : (
                  <p>{t(texts[index].key)}</p>
                )}
              </div>
              <LazyImage
                src={image.pl}
                alt={image.alt}
                className={styles.img}
              />
              {index !== texts.length-1 ? <div className={styles.line} /> : null}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Intranet