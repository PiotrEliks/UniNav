import React, { useContext } from 'react'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer.jsx';
import { ThemeContext } from '../contexts/theme.jsx';
//import { withNamespaces } from 'react-i18next';
import styles from './Homepage.module.css';
import { useTranslation } from 'react-i18next';
import TwitterEmbed from '../components/TwitterEmbed.jsx';
import ImageSlider from '../components/ImageSlider.jsx';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

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
        <div>
            <PageNav />
            <main className="main" data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
                <div className={styles.container2}>
                    <div className={styles.bottom}>
                        <h1>{t('Homepage.Top.Welcome')}</h1>
                        <h2>{t('Homepage.Top.Text')}</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <h1>{t('Homepage.Left.Header')}</h1>
                            <ul>
                                <li>Interaktywną mapę wydziału</li>
                                <li>Informacje o studenckich kołach naukowych na wydziale</li>
                                <li>Informacje o aplikacji mobilnej mającej na celu pomoc w poruszaniu się po wydziale</li>
                                <li>Wszystkie przydatne linki w jednym miejscu</li>
                                <li>Instrukcję korzystania z platformy USOS uczelini</li>
                                <li>Instrukcję korzystania z Intranetu</li>
                            </ul>
                        </div>

                        <div className={styles.right}>
                            <h1>{t('Homepage.Right.Header')}</h1>
                            <TwitterEmbed />
                        </div>
                    </div>
                    <div className={styles.top}>
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
