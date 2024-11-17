import React, { useState, useRef, useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./PageNav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import i18n from '../i18n';
import { IoLanguage } from "react-icons/io5";
import { MdLightMode, MdDarkMode, MdContrast } from "react-icons/md";
import { ThemeContext } from '../contexts/theme.jsx';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const PageNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    localStorage.setItem('lng', lng);
  }
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    const lng = localStorage.getItem("lng");
    i18n.changeLanguage(lng);
}, [localStorage.getItem("lng")]);

const [currentSite, setCurrentSite] = useState('');

useEffect(() => {
  const renderLevel = async () => {
    try {
      switch (window.location.href.split('/').slice(-1).toString()) {
      case '':
        return setCurrentSite('main');
      case 'map':
        return setCurrentSite('map');
      case 'academic-circles':
        return setCurrentSite('academic-circles');
      case 'MobileApp':
        return setCurrentSite('MobileApp');
      case 'Info':
        return setCurrentSite('Info');
      case 'Usos':
        return setCurrentSite('Usos');
      case 'Intranet':
        return setCurrentSite('Intranet');
      default:
        return setCurrentSite('main');
    }
  } catch (error){
    console.log('error');
  }

  };
  renderLevel();
}, [window.location.href.split('/').slice(-1)]);

  return (
    <header data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
      <button className="nav_btn" onClick={showNavbar} title={t('Icons.Menu')}>
        <FaBars className="icon" />
      </button>
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="logo" width="100%" />
        </div>
      </NavLink>
      <nav ref={navRef}>
        <NavLink to="/" className={currentSite === 'main' ? 'currentSite' : ''}>
          {t('Nav.Homepage')}
        </NavLink>
        <NavLink to="/map" className={currentSite === 'map' ? 'currentSite' : ''}>
          {t('Nav.Map')}
        </NavLink>
        <NavLink to="/academic-circles" className={currentSite === 'academic-circles' ? 'currentSite' : ''}>
          {t('Nav.Academic-circles')}
        </NavLink>
        <NavLink to="/MobileApp" className={currentSite === 'MobileApp' ? 'currentSite' : ''}>
          {t('Nav.MobileApp')}
        </NavLink>
        <NavLink to="/Info" className={currentSite === 'Info' ? 'currentSite' : ''}>
          {t('Nav.Info')}
        </NavLink>
        <NavLink to="/Usos" className={currentSite === 'Usos' ? 'currentSite' : ''}>
          {t('Nav.Usos')}
        </NavLink>
        <NavLink to="/Intranet" className={currentSite === 'Intranet' ? 'currentSite' : ''}>
          {t('Nav.Intranet')}
        </NavLink>
        <button className="nav_btn nav_close_btn" onClick={showNavbar}>
          <FaTimes className="icon" />
        </button>
      </nav>

      <div className="language_selector">
        <button type="button" onClick={toggleTheme} className="btn btn_icon" aria-label="toggle theme" title={themeName === 'dark' ?t('Icons.Light') : t('Icons.Dark')} disabled={isContrast}>
          {themeName === 'dark' ? (
            <MdLightMode className="icon" />
          ) : (
            <MdDarkMode className="icon" />
          )}
        </button>
        <button type="button" onClick={toggleContrast} title={t('Icons.Contrast')} className="btn btn_icon">
          <MdContrast className="icon" />
        </button>
        <button title={t('Icons.Language')} onClick={() => setIsOpen(!isOpen)} className="btn btn_icon">
          <IoLanguage className="icon" />
        </button>
        {isOpen && (
          <ul className="language_list">
            <li onClick={() => changeLanguage('pl')}>Polski</li>
            <li onClick={() => changeLanguage('en')}>English</li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default PageNav;
