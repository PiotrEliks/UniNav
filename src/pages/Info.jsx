import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import { NavLink } from "react-router-dom";
import styles from './Info.module.css';
import PageNav from '../components/PageNav.jsx';
import Footer from '../components/Footer.jsx';
import { useTranslation } from 'react-i18next';
import building from '../assets/building.jpg';
import buildingSmall from '../assets/building-small.jpg';
import { TbWorld } from "react-icons/tb";
import MetaDecorator from '../components/MetaDecorator.jsx';
import LazyImage from '../components/LazyImage';
import ImageWithPlaceholder from '../components/ImageWithPlaceholder.jsx';

const Info = () => {
  const { t } = useTranslation();
  const [{ themeName, isContrast }] = useContext(ThemeContext);
  const [displayDivName, setDisplayDivName] = useState('Info');

  const infoRef = useRef(null);
  const buildingRef = useRef(null);
  const structureRef = useRef(null);
  const examRef = useRef(null);
  const monoLecturesRef = useRef(null);
  const apprenticeshipRef = useRef(null);
  const libraryRef = useRef(null);
  const sylabusRef = useRef(null);
  const usosRef = useRef(null);
  const intranetRef = useRef(null);

  const scrollToDiv = (divName) => {
    switch(divName) {
      case 'Info':
        infoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Building':
        buildingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Structure':
        structureRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Exam':
        examRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'MonoLectures':
        monoLecturesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Apprenticeship':
        apprenticeshipRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Library':
        libraryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Sylabus':
        sylabusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Usos':
        usosRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      case 'Intranet':
        intranetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    scrollToDiv(displayDivName);
  }, [displayDivName]);

  return (
    <>
      <MetaDecorator title={t('Info.title')} />
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <div className={styles.top}>
            <h1>{t('Info.Header')}</h1>
          </div>
          <div className={styles.container}>
            <div className={styles.left}>
              <h1>{t('Info.List.Header')}</h1>
              <ul>
              <li onClick={() => setDisplayDivName('Info')} className={displayDivName === 'Info' ? styles.selected : ''}>{t('Info.List.l1')}</li>
                <li onClick={() => setDisplayDivName('Building')} className={displayDivName === 'Building' ? styles.selected : ''}>{t('Info.List.l2')}</li>
                <li onClick={() => setDisplayDivName('Structure')} className={displayDivName === 'Structure' ? styles.selected : ''}>{t('Info.List.l3')}</li>
                <li onClick={() => setDisplayDivName('Exam')} className={displayDivName === 'Exam' ? styles.selected : ''}>{t('Info.List.l4')}</li>
                <li onClick={() => setDisplayDivName('MonoLectures')} className={displayDivName === 'MonoLectures' ? styles.selected : ''}>{t('Info.List.l5')}</li>
                <li onClick={() => setDisplayDivName('Apprenticeship')} className={displayDivName === 'Apprenticeship' ? styles.selected : ''}>{t('Info.List.l6')}</li>
                <li onClick={() => setDisplayDivName('Library')} className={displayDivName === 'Library' ? styles.selected : ''}>{t('Info.List.l7')}</li>
                <li onClick={() => setDisplayDivName('Sylabus')} className={displayDivName === 'Sylabus' ? styles.selected : ''}>{t('Info.List.l8')}</li>
                <li onClick={() => setDisplayDivName('Usos')} className={displayDivName === 'Usos' ? styles.selected : ''}>{t('Info.List.l9')}</li>
                <li onClick={() => setDisplayDivName('Intranet')} className={displayDivName === 'Intranet' ? styles.selected : ''}>{t('Info.List.l10')}</li>
              </ul>
            </div>

            <div className={styles.right}>
              <div className={styles.middle} />
              <div className={styles.rightContent}>
                {displayDivName === 'Info' &&
                  <div ref={infoRef} className={styles.content}>
                    <h1>{t('Info.Info.Header')}</h1>
                    <p>{t('Info.Info.text')}</p>
                    <div className={styles.corners}>
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9DbjM0fxXio?si=DAfCRLVM4tR50wYV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>
                }
                {displayDivName === 'Building' &&
                  <div ref={buildingRef} className={styles.content}>
                    <h1>{t('Info.Building.Header')}</h1>
                    <p>{t('Info.Building.text')} <NavLink to="/map">{t('Info.Building.text1')}</NavLink>.</p>
                    <div className={styles.corners}>
                      <ImageWithPlaceholder
                        src={building}
                        placeholderSrc={buildingSmall}
                        alt="building"
                        className={styles.cornersContainer}
                      />
                    </div>
                  </div>
                }
                {displayDivName === 'Structure' &&
                  <div ref={structureRef} className={styles.content}>
                    <h1>{t('Info.Structure.Header')}</h1>
                    <ul className={styles.listLevel1}>
                      <li>{t('Info.Structure.L1')} <a href="https://if.amu.edu.pl/" target='_blank'><TbWorld className={styles.icon}/></a> - Prof. dr hab. Marcin Ziółek - marziol@amu.edu.pl: </li>
                      <ul className={styles.listLevel2}>
                        <li>{t('Info.Structure.l1')} - Prof. UAM dr hab. Jacek Gapiński - jacek.gapiński@amu.edu.pl</li>
                        <li>{t('Info.Structure.l2')} - Prof. dr hab. Maciej Kozak - mkozak@amu.edu.pl</li>
                        <li>{t('Info.Structure.l3')} - Prof. dr hab. Adam Lipowski - lipowski@amu.edu.pl</li>
                        <li>{t('Info.Structure.l4')} - Prof. UAM dr hab. Jacek Kubicki - jacek.kubicki@amu.edu.pl</li>
                        <li>{t('Info.Structure.l5')} - Prof. UAM dr hab. Mateusz Kempiński - matt@amu.edu.pl</li>
                        <li>{t('Info.Structure.l6')} - Prof. UAM dr hab. Aneta Woźniak-Braszak - abraszak@amu.edu.pl</li>
                      </ul>
                      <li>{t('Info.Structure.L2')}  <a href="https://isik.amu.edu.pl/" target='_blank'><TbWorld className={styles.icon}/></a> - Prof. UAM dr hab. Jarosław W. Kłos - klos@amu.edu.pl:</li>
                      <ul className={styles.listLevel2}>
                        <li>{t('Info.Structure.l7')} - Prof. UAM dr hab. Karol Bartkiewicz - karol.bartkiewicz@amu.edu.pl</li>
                        <li>{t('Info.Structure.l8')} - Prof. UAM dr hab. Jarosław Wojciech Kłos - klos@amu.edu.pl</li>
                        <li>{t('Info.Structure.l9')} - Prof. UAM dr hab. Anna Dyrdał - adyrdal@amu.edu.pl</li>
                        <li>{t('Info.Structure.l10')} - Prof. UAM dr hab. Konrad Kapcia - konrad.kapcia@amu.edu.pl</li>
                      </ul>
                      <li>{t('Info.Structure.L3')}  - Prof. UAM dr hab. Agnieszka Kryszczyńska - agn@amu.edu.pl</li>
                      <li>{t('Info.Structure.L4')}  - Prof.UAM dr hab. Andrzej Wicher - andrzej.wicher@amu.edu.pl</li>
                      <li>{t('Info.Structure.L5')} : </li>
                      <ul className={styles.listLevel2}>
                        <li>{t('Info.Structure.l11')} - Prof. dr hab. Ryszard Naskręcki - ryszard.naskrecki@amu.edu.pl</li>
                        <li>{t('Info.Structure.l12')} - dr Mikołaj Baranowski - mikbar@amu.edu.pl</li>
                        <li>{t('Info.Structure.l13')} - dr Monika Jażdżewska - mojaz@amu.edu.pl</li>
                        <li>{t('Info.Structure.l14')} - dr inż. Henryk Gierszal - gierszal@amu.edu.pl</li>
                        <li>{t('Info.Structure.l15')} - dr Sebastian Wołoszczuk - sebastian.woloszczuk@amu.edu.pl</li>
                      </ul>
                      <li>{t('Info.Structure.L6')}  <a href="https://www.fizyka.amu.edu.pl/strona-glowna/struktura-wydzialu/biuro-obslugi-studentow" target='_blank'><TbWorld className={styles.icon}/></a> - mgr Ewa Pawelczyk - ewapaw8@amu.edu.pl</li>
                      <li>{t('Info.Structure.L7')}  <a href="https://www.fizyka.amu.edu.pl/strona-glowna/struktura-wydzialu/biuro-obslugi-wydzialu" target='_blank'><TbWorld className={styles.icon}/></a> - mgr Katarzyna Panek - panek@amu.edu.pl</li>
                      <li>{t('Info.Structure.L8')} <a href="http://librafa.home.amu.edu.pl/" target='_blank'><TbWorld className={styles.icon}/></a> - mgr Aleksandra Węclewska - aw@amu.edu.pl</li>
                      <li>{t('Info.Structure.L9')} - Wojciech Płócienniczak - wojplo@amu.edu.pl</li>
                    </ul>
                    <p>{t('Info.Structure.text')} <a href="https://ludzie-dev.wmi.amu.edu.pl/unit/0400000000/" target="_blank">tutaj</a></p>
                  </div>
                }
                {displayDivName === 'Exam' &&
                  <div ref={examRef} className={styles.content}>
                    <h1>{t('Info.Exam.Header')}</h1>
                    <p>{t('Info.Exam.text')} <a href="https://www.fizyka.amu.edu.pl/studenci/egzaminy-dyplomowe/zagadnienia-egzaminacyjne" target='_blank'>{t('Info.Exam.l1')}</a>, <a href="https://www.fizyka.amu.edu.pl/__data/assets/word_doc/0026/429731/Wniosek-o-przeprowadzenie-egzaminu-dyplomowego.doc" target='_blank'>{t('Info.Exam.l2')}</a>, <a href="https://www.fizyka.amu.edu.pl/__data/assets/pdf_file/0028/445708/Wytyczne-pisania-prac-dyplomowych.pdf" target='_blank'>{t('Info.Exam.l3')}</a>, <a href="https://www.fizyka.amu.edu.pl/__data/assets/pdf_file/0026/445706/Wzor_strony_tytulowej_WF_UAM.pdf" target='_blank'>{t('Info.Exam.l4')}</a>, <a href="https://www.fizyka.amu.edu.pl/__data/assets/word_doc/0029/445709/Wzor_strony_tytulowej_WF_UAM_edytowalny.doc" target='_blank'>{t('Info.Exam.l5')}</a>, <a href="https://www.fizyka.amu.edu.pl/__data/assets/pdf_file/0027/445707/Zarzadzenie-Rektora-Nr-3_2020_2021.pdf" target='_blank'>{t('Info.Exam.l6')}</a>, <a href="https://usosdocs.amu.edu.pl/" target='_blank'>{t('Info.Exam.l7')}</a></p>
                  </div>
                }
                {displayDivName === 'MonoLectures' &&
                  <div ref={monoLecturesRef} className={styles.content}>
                    <h1>{t('Info.MonoLectures.Header')}</h1>
                    <p>{t('Info.MonoLectures.text')} <a href="https://uam.sharepoint.com/sites/4203000000/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=ZTQefy&RootFolder=%2Fsites%2F4203000000%2FShared%20Documents%2FProgramy%20Studi%C3%B3w%20i%20Sylabusy%2FWYK%C5%81ADY%20MONOGRAFICZNE&FolderCTID=0x012000849C46DAB2DF8046990FCFD09D8BED46" target="_blank">{t('Info.MonoLectures.text1')}</a> {t('Info.MonoLectures.text2')}</p>
                  </div>
                }
                {displayDivName === 'Apprenticeship' &&
                  <div ref={apprenticeshipRef} className={styles.content}>
                    <h1>{t('Info.Apprenticeship.Header')}</h1>
                    <p>{t('Info.Apprenticeship.text')} <a href="https://www.fizyka.amu.edu.pl/studenci/praktyki-studenckie" target="_blank">{t('Info.Apprenticeship.text1')}</a> {t('Info.Apprenticeship.text2')}</p>
                  </div>
                }
                {displayDivName === 'Library' &&
                  <div ref={libraryRef} className={styles.content}>
                    <h1>{t('Info.Library.Header')}</h1>
                    <p>{t('Info.Library.text')} <a href="http://librafa.home.amu.edu.pl/" target='_blank'>{t('Info.Library.text1')}</a></p>
                  </div>
                }
                {displayDivName === 'Sylabus' &&
                  <div ref={sylabusRef} className={styles.content}>
                    <h1>{t('Info.Sylabus.Header')}</h1>
                    <p>{t('Info.Sylabus.text')} <a href="https://sylabus.amu.edu.pl/pl/20/0/0/6" target="_blank">{t('Info.Sylabus.text1')}</a></p>
                  </div>
                }
                {displayDivName === 'Usos' &&
                  <div ref={usosRef} className={styles.content}>
                    <h1>{t('Info.Usos.Header')}</h1>
                    <p>{t('Info.Usos.text')} <NavLink to="/Usos">{t('Info.Usos.text1')}</NavLink>.</p>
                  </div>
                }
                {displayDivName === 'Intranet' &&
                  <div ref={intranetRef} className={styles.content}>
                    <h1>{t('Info.Intranet.Header')}</h1>
                    <p>{t('Info.Intranet.text')} <NavLink to="/Intranet">{t('Info.Intranet.text1')}</NavLink>.</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Info