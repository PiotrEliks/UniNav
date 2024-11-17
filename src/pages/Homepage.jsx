import React, { useContext } from 'react'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer.jsx';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Homepage.module.css';
import { useTranslation } from 'react-i18next';
import TwitterEmbed from '../components/TwitterEmbed.jsx';
import ImageSlider from '../components/ImageSlider.jsx';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { NavLink } from "react-router-dom";
import MetaDecorator from '../components/MetaDecorator.jsx';

const Homepage = () => {
    const { t } = useTranslation();
    const [{ themeName, isContrast }] = useContext(ThemeContext);
    const images = [
        {url: img1, alt: "img1"},
        {url: img2, alt: "img2"},
        {url: img3, alt: "img3"},
        {url: img4, alt: "img4"},
    ];

    return (
        <div className="page">
            <MetaDecorator title={t('Homepage.title')} />
            <PageNav />
            <main className="main" data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
                <div className={styles.container2}>
                    <div className={styles.top}>
                        <h1>{t('Homepage.Top.Welcome')}</h1>
                        <h2>{t('Homepage.Top.Text')}</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <h1>{t('Homepage.Left.Header')}</h1>
                            <div className={styles.grid}>
                                 <NavLink to="/map">
                                    <div className={styles.gridItem}>
                                        <p>{t('Homepage.Left.Block1')}</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/Academic-circles">
                                    <div className={styles.gridItem}>
                                        <p>{t('Homepage.Left.Block2')}</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/MobileApp">
                                    <div className={styles.gridItem}>
                                        <p>{t('Homepage.Left.Block3')}</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/Info">
                                    <div className={styles.gridItem}>
                                        <p>{t('Homepage.Left.Block4')}</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/Usos">
                                    <div className={styles.gridItem}>
                                        <p>{t('Homepage.Left.Block5')}</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/Intranet">
                                    <div className={styles.gridItem}>
                                        <p>{t('Homepage.Left.Block6')}</p>
                                    </div>
                                </NavLink>
                            </div>

                        </div>

                        <div className={styles.right}>
                            <h1>{t('Homepage.Right.Header')}</h1>
                            <TwitterEmbed />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.sliderContainer}>
                          <ImageSlider images={images}/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Homepage
