import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');
  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    });
  }, []);
  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  const [isContrast, setIsContrast] = useState(false);

  const toggleContrast = () => {
    const contrast = isContrast === true ? false : true;
    localStorage.setItem('isContrast', contrast);
    setThemeName('dark');
    setIsContrast(contrast);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme, isContrast, toggleContrast }]}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ThemeProvider, ThemeContext };