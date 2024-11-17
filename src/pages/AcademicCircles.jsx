import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './AcademicCircles.module.css';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaTiktok  } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
import MetaDecorator from '../components/MetaDecorator.jsx';

const AcademicCircles = () => {
  const { t } = useTranslation();
  const [{ themeName, isContrast }] = useContext(ThemeContext);
  return (
    <>
      <MetaDecorator title={t('Academic-circle.title')} />
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <h1>{t('Academic-circle.Header')}</h1>
          <div className={styles.container}>
            <div className={styles.card}>
              <h2 className={styles.title}>{t('Academic-circle.First.Header')}</h2>
              <p className={styles.p1}>{t('Academic-circle.First.p1')}</p>
              <p>{t('Academic-circle.First.p2')}</p>
              <p>{t('Academic-circle.First.p3')}</p>
              <div className={styles.line}/>
              <p>{t('Academic-circle.First.Supervisor')}</p>
              <p>{t('Academic-circle.First.Management')}</p>
              <ul>
                <li>{t('Academic-circle.First.Management-l1')}</li>
                <li>{t('Academic-circle.First.Management-l2')}</li>
                <li>{t('Academic-circle.First.Management-l3')}</li>
              </ul>
              <div className={styles.iconContainer}>
                <a href="https://www.facebook.com/sknasonic" target="_blank"><FaFacebookSquare className={styles.icon}/></a>
                <a href="https://www.instagram.com/sknasonic/" target="_blank"><FaInstagram className={styles.icon}/></a>
                skna.sonic@gmail.com
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.title}>{t('Academic-circle.Second.Header')}</h2>
              <p>{t('Academic-circle.Second.p')}</p>
              <div className={styles.line}/>
              <p>{t('Academic-circle.Second.Supervisor')}</p>
              <p>{t('Academic-circle.Second.Management')}</p>
              <ul>
                <li>{t('Academic-circle.Second.Management-l1')}</li>
                <li>{t('Academic-circle.Second.Management-l2')}</li>
              </ul>
              <div className={styles.iconContainer}>
                <a href="http://www.astro.amu.edu.pl/pl/studia/kolo-naukowe/" target='_blank'><TbWorld className={styles.icon}/></a>
                <a href="https://www.facebook.com/AKN.Poznan" target="_blank"><FaFacebookSquare className={styles.icon}/></a>
                aknuam.zarzad@gmail.com
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.title}>{t('Academic-circle.Third.Header')}</h2>
              <p>{t('Academic-circle.Third.p1')}</p>
              <p>{t('Academic-circle.Third.p2')}</p>
              <p>{t('Academic-circle.Third.p3')}</p>
              <p>{t('Academic-circle.Third.p4')}</p>
              <p>{t('Academic-circle.Third.p5')}</p>
              <div className={styles.line}/>
              <p>{t('Academic-circle.Third.Supervisor')}</p>
              <p>{t('Academic-circle.Third.Management')}</p>
              <ul>
                <li>{t('Academic-circle.Third.Management-l1')}</li>
                <li>{t('Academic-circle.Third.Management-l2')}</li>
                <li>{t('Academic-circle.Third.Management-l3')}</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2 className={styles.title}>{t('Academic-circle.Fourth.Header')}</h2>
              <p>{t('Academic-circle.Fourth.p')}</p>
              <div className={styles.line}/>
              <p>{t('Academic-circle.Fourth.Supervisor')}</p>
              <ul>
                <li>{t('Academic-circle.Fourth.Supervisor-l1')}</li>
                <li>{t('Academic-circle.Fourth.Supervisor-l2')}</li>
              </ul>
              <p>{t('Academic-circle.Fourth.Management')}</p>
              <ul>
                <li>{t('Academic-circle.Fourth.Management-l1')}</li>
                <li>{t('Academic-circle.Fourth.Management-l2')}</li>
                <li>{t('Academic-circle.Fourth.Management-l3')}</li>
              </ul>
              <div className={styles.iconContainer}>
                <a href="https://studenckie-kolo-naukowe-errno.github.io/" target='_blank'><TbWorld className={styles.icon}/></a>
                <a href="https://www.facebook.com/Errno404" target="_blank"><FaFacebookSquare className={styles.icon}/></a>
                aluerrno@gmail.com
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.title}>{t('Academic-circle.Fifth.Header')}</h2>
              <p>{t('Academic-circle.Fifth.p1')}</p>
              <p>{t('Academic-circle.Fifth.p2')}</p>
              <p><a href="https://www.fizyka.amu.edu.pl/__data/assets/pdf_file/0018/406701/Deklaracja-Fusion.pdf" target="_blank">{t('Academic-circle.Fifth.p3')}</a> {t('Academic-circle.Fifth.p4')}</p>
              <div className={styles.line}/>
              <p>{t('Academic-circle.Fifth.Supervisor')}</p>
              <p>{t('Academic-circle.Fifth.Management')}</p>
              <ul>
                <li>{t('Academic-circle.Fifth.Management-l1')}</li>
                <li>{t('Academic-circle.Fifth.Management-l2')}</li>
                <li>{t('Academic-circle.Fifth.Management-l3')}</li>
                <li>{t('Academic-circle.Fifth.Management-l4')}</li>
              </ul>
              <div className={styles.iconContainer}>
                <a href="http://sknf.amu.edu.pl/" target='_blank'><TbWorld className={styles.icon}/></a>
                <a href="https://www.facebook.com/fusionUAM" target="_blank"><FaFacebookSquare className={styles.icon}/></a>
                <a href="https://www.instagram.com/sknf_fusion/" target="_blank"><FaInstagram className={styles.icon}/></a>
                <a href="https://www.tiktok.com/@tiktokowa_fizyka" target="_blank"><FaTiktok className={styles.icon}/></a>
                sknf.fusion@gmail.com
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.title}>{t('Academic-circle.Sixth.Header')}</h2>
              <p>{t('Academic-circle.Sixth.p1')}</p>
              <p>{t('Academic-circle.Sixth.p2')}</p>
              <div className={styles.line}/>
              <p>{t('Academic-circle.Sixth.Supervisor')}</p>
              <p>{t('Academic-circle.Sixth.Management')}</p>
              <ul>
                <li>{t('Academic-circle.Sixth.Management-l1')}</li>
                <li>{t('Academic-circle.Sixth.Management-l2')}</li>
                <li>{t('Academic-circle.Sixth.Management-l3')}</li>
                <li>{t('Academic-circle.Sixth.Management-l4')}</li>
              </ul>
              <div className={styles.iconContainer}>
                <a href="https://www.instagram.com/knoo.uam/?hl=am-et" target="_blank"><FaInstagram className={styles.icon}/></a>
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.title}>{t('Academic-circle.Seventh.Header')}</h2>
              <p>{t('Academic-circle.Seventh.p1')}</p>
              <p>{t('Academic-circle.Seventh.p2')}</p>
              <p><a href="https://www.fizyka.amu.edu.pl/__data/assets/pdf_file/0023/406715/Deklaracja-Radius.pdf" target="_blank">{t('Academic-circle.Seventh.p3')}</a> {t('Academic-circle.Seventh.p4')}</p>
              <div className={styles.line}/>
              <p>{t('Academic-circle.Seventh.Supervisor')}</p>
              <ul>
                <li>{t('Academic-circle.Seventh.Supervisor-l1')}</li>
                <li>{t('Academic-circle.Seventh.Supervisor-l2')}</li>
                <li>{t('Academic-circle.Seventh.Supervisor-l3')}</li>
              </ul>
              <p>{t('Academic-circle.Seventh.Management')}</p>
              <ul>
                <li>{t('Academic-circle.Seventh.Management-l1')}</li>
                <li>{t('Academic-circle.Seventh.Management-l2')}</li>
                <li>{t('Academic-circle.Seventh.Management-l3')}</li>
                <li>{t('Academic-circle.Seventh.Management-l4')}</li>
                <li>{t('Academic-circle.Seventh.Management-l5')}</li>
              </ul>
              <div className={styles.iconContainer}>
                <a href="https://www.facebook.com/kolo.naukowe.radius" target="_blank"><FaFacebookSquare className={styles.icon}/></a>
                <a href="https://www.instagram.com/kolo_radius_uam/" target="_blank"><FaInstagram className={styles.icon}/></a>
                radiusfizykamedyczna@gmail.com
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AcademicCircles