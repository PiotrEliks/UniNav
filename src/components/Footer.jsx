import React, { useState, useRef, useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import i18n from '../i18n';
//import { withNamespaces } from 'react-i18next';
import { IoLanguage } from "react-icons/io5";
import { MdLightMode, MdDarkMode, MdContrast } from "react-icons/md";
import { ThemeContext } from '../contexts/theme.jsx';
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter  } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Footer = () => {
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
    <footer data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.logo}>
                <img src={logo} alt="logo" width="100%" />
              </div>
              <div className={styles.container4}>
                <div className={styles.nav}>
                  <NavLink to="/">
                    {t('Nav.Homepage')}
                  </NavLink>
                  <NavLink to="/map">
                    {t('Nav.Map')}
                  </NavLink>
                  <NavLink to="/academic-circles">
                    {t('Nav.Academic-circles')}
                  </NavLink>
                  <NavLink to="/MobileApp">
                    {t('Nav.MobileApp')}
                  </NavLink>
                </div>
                <div className={styles.nav}>
                  <NavLink to="/Info">
                    {t('Nav.Info')}
                  </NavLink>
                  <NavLink to="/Usos">
                    {t('Nav.Usos')}
                  </NavLink>
                  <NavLink to="/Intranet">
                    {t('Nav.Intranet')}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className={styles.socialMediaContainer}>
              <p>{t('Footer.SocialMedia')}</p>
              <div className={styles.iconsContainer}>
                <a href="https://www.fizyka.amu.edu.pl/" target="_blank">
                  <TbWorld className={styles.icon}/>
                </a>
                <a href="https://www.youtube.com/channel/UC3q7C-JfUcpEvBCN3t2B8Ng" target="_blank">
                  <FaYoutube className={styles.icon}/>
                </a>
                <a href="https://www.facebook.com/fizykawydzialuam" target="_blank">
                  <FaFacebookSquare className={styles.icon}/>
                </a>
                <a href="https://x.com/UAM_Poznan" target="_blank">
                  <FaInstagram className={styles.icon}/>
                </a>
                <a href="https://www.instagram.com/uam.poznan/" target="_blank">
                  <FaXTwitter className={styles.icon}/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <p>@UniNav 2024</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
