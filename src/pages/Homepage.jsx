import React, { useContext } from 'react'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer.jsx';
import { ThemeContext } from '../contexts/theme.jsx';
//import { withNamespaces } from 'react-i18next';
import styles from './Homepage.module.css';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
    const { t } = useTranslation();
    const [{ themeName, isContrast }] = useContext(ThemeContext);
    return (
        <div>
            <PageNav />
            <main className="main" data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
                <div className={styles.container}>
                    {t('Homepage')}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Homepage
