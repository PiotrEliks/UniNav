import React, { useState, useRef, useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./PageNav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import i18n from '../i18n';
//import { withNamespaces } from 'react-i18next';
import { IoLanguage } from "react-icons/io5";
import { MdLightMode, MdDarkMode, MdContrast } from "react-icons/md";
import { ThemeContext } from '../contexts/theme.jsx';
import { useTranslation } from 'react-i18next';

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

  return (
    <header data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
      <button className="nav_btn" onClick={showNavbar}>
        <FaBars className="icon" />
      </button>
      <NavLink to="/">
        <h1 className="name">
          UniNav
        </h1>
      </NavLink>

      <nav ref={navRef}>
        <NavLink to="/">
          {t('Homepage')}
        </NavLink>
        <NavLink to="/map">
          {t('Map')}
        </NavLink>
        <NavLink to="/materials">
          {t('Map')}
        </NavLink>
        <button className="nav_btn nav_close_btn" onClick={showNavbar}>
          <FaTimes className="icon" />
        </button>
      </nav>

      <div className="language_selector">
        <button type="button" onClick={toggleTheme} className="btn btn_icon" aria-label="toggle theme">
          {themeName === 'dark' ? (
            <MdLightMode className="icon" />
          ) : (
            <MdDarkMode className="icon" />
          )}
        </button>
        <button type="button" onClick={toggleContrast} title="Zmiana kontrastu" className="btn btn_icon">
          <MdContrast className="icon" />
        </button>
        <button title="Zmiana języka" onClick={() => setIsOpen(!isOpen)} className="btn btn_icon">
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
