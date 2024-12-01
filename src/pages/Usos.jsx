import React, { useContext, lazy } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Usos.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import ImageWithPlaceholder from '../components/ImageWithPlaceholder.jsx';
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
import img1Small from '../assets/USOS/img1-small.png';
import img2Small from '../assets/USOS/img2-small.png';
import img3Small from '../assets/USOS/img3-small.png';
import img4Small from '../assets/USOS/img4-small.png';
import img5Small from '../assets/USOS/img5-small.png';
import img6Small from '../assets/USOS/img6-small.png';
import img7Small from '../assets/USOS/img7-small.png';
import img8Small from '../assets/USOS/img8-small.png';
import img9Small from '../assets/USOS/img9-small.png';
import img10Small from '../assets/USOS/img10-small.png';
import MetaDecorator from '../components/MetaDecorator.jsx';

const Usos = () => {
  const [{ themeName, isContrast }] = useContext(ThemeContext);
  const { t } = useTranslation();
  const language = localStorage.getItem("lng");

  const images = [
    { pl: img1, en: img1en, alt: 'img1', small: img1Small },
    { pl: img2, en: img2en, alt: 'img2', small: img2Small },
    { pl: img3, en: img3en, alt: 'img3', small: img3Small },
    { pl: img4, en: img4en, alt: 'img4', small: img4Small },
    { pl: img5, en: img5en, alt: 'img5', small: img5Small },
    { pl: img6, en: img6en, alt: 'img6', small: img6Small },
    { pl: img7, en: img7en, alt: 'img7', small: img7Small },
    { pl: img8, en: img8en, alt: 'img8', small: img8Small },
    { pl: img9, en: img9en, alt: 'img9', small: img9Small },
    { pl: img10, en: img10en, alt: 'img10', small: img10Small },
  ];

  const texts = [
    { key: 'Usos.text1', link: 'https://usosweb.amu.edu.pl/' },
    { key: 'Usos.text2' },
    { key: 'Usos.text3' },
    { key: 'Usos.text4' },
    { key: 'Usos.text5' },
    { key: 'Usos.text6' },
    { key: 'Usos.text7' },
    { key: 'Usos.text8' },
    { key: 'Usos.text9', link: 'https://uam.sharepoint.com/sites/Intranet' },
    { key: 'Usos.text10' },
  ];

  return (
    <>
      <MetaDecorator title={t('Usos.title')} />
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <h1>{t('Usos.header')}</h1>
          {images.map((image, index) => (
            <div key={index} className={styles.container}>
              <div className={styles.content}>
                {texts[index].link ? (
                  <>
                    <p>{t(texts[index].key)} <a href={texts[index].link} target='_blank' rel="noopener noreferrer">{texts[index].key === 'Usos.text9' ? t('Usos.text9a') : 'link'}</a>
                    {texts[index].key === 'Usos.text1a' && t('Usos.text1a')}</p>
                  </>
                ) : (
                  <p>{t(texts[index].key)}</p>
                )}
              </div>
              <ImageWithPlaceholder
                src={language === 'pl' ? image.pl : image.en}
                placeholderSrc={image.small}
                alt={image.alt}
                className={styles.imgContainer}
              />
              {index !== texts.length-1 ? <div className={styles.line} /> : null}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Usos;
