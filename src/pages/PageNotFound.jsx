import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './PageNotFound.module.css';
import MetaDecorator from '../components/MetaDecorator.jsx';
import PageNav from '../components/PageNav.jsx';
import Footer from '../components/Footer.jsx';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  const [{ themeName, isContrast }] = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <>
      <MetaDecorator title={t('Usos.title')} />
      <PageNav />
      <main data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.main}>
          <h1>Taka strona nie istnieje 😔</h1>
          <p>Sprawdź istniejące strony:</p>
          <ul>
            <li>
              <NavLink to="/">
                {t('Nav.Homepage')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/map">
                {t('Nav.Map')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Academic-circles">
                {t('Nav.Academic-circles')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/MobileApp">
                {t('Nav.MobileApp')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Info">
                {t('Nav.Info')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Usos">
                {t('Nav.Usos')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Intranet">
                {t('Nav.Intranet')}
              </NavLink>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PageNotFound