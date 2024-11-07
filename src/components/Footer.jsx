import React, { useState, useRef, useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import i18n from '../i18n';
//import { withNamespaces } from 'react-i18next';
import { IoLanguage } from "react-icons/io5";
import { MdLightMode, MdDarkMode, MdContrast } from "react-icons/md";
import { ThemeContext } from '../contexts/theme.jsx';

const Footer = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [{ themeName, toggleTheme, isContrast, toggleContrast }] = useContext(ThemeContext);
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
            @ 2024 UniNav
        </div>
    </footer>
  );
}

export default Footer;
