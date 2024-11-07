import React, { useContext, useState, Suspense, lazy } from 'react';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer.jsx';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Map.module.css';
import { useTranslation } from 'react-i18next';
import { FaWindowClose } from "react-icons/fa";
import Loader from '../components/Loader.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';

const Ground = lazy(() => import('../components/Ground.jsx'));
const Basement = lazy(() => import('../components/Basement.jsx'));
const LevelOne = lazy(() => import('../components/LevelOne.jsx'));
const LevelTwo = lazy(() => import('../components/LevelTwo.jsx'));
const LevelThree = lazy(() => import('../components/LevelThree.jsx'));

const Map = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  const { t } = useTranslation();
  const [{ themeName, isContrast }] = useContext(ThemeContext);
  
  const [state, setState] = useState({
    selectedLevel: 0,
    transitionDirection: 'up'
  });

  const { selectedLevel, transitionDirection } = state;
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [info, setInfo] = useState('');

  const renderLevel = () => {
    switch (selectedLevel) {
      case -1:
        return <Basement setSelectedRoom={setSelectedRoom} setInfo={setInfo} />;
      case 0:
        return <Ground setSelectedRoom={setSelectedRoom} setInfo={setInfo} />;
      case 1:
        return <LevelOne setSelectedRoom={setSelectedRoom} setInfo={setInfo} />;
      case 2:
        return <LevelTwo setSelectedRoom={setSelectedRoom} setInfo={setInfo} />;
      case 3: 
        return <LevelThree setSelectedRoom={setSelectedRoom} setInfo={setInfo} />;
      default:
        return <Ground setSelectedRoom={setSelectedRoom} setInfo={setInfo} />;
    }
  };

  const setValidSelectedLevel = (newLevel) => {
    const validLevels = [-1, 0, 1, 2, 3];
    if (validLevels.includes(newLevel) && newLevel !== selectedLevel) {
      const direction = newLevel > selectedLevel ? 'up' : 'down';
      console.log(`Changing level from ${selectedLevel} to ${newLevel} (${direction})`);
      
      setState({
        selectedLevel: newLevel,
        transitionDirection: direction
      });
      
      setSelectedRoom(null);
    }
  };

  const goUp = () => {
    setValidSelectedLevel(selectedLevel + 1);
  };

  const goDown = () => {
    setValidSelectedLevel(selectedLevel - 1);
  };

  const variants = {
    initial: (direction) => ({
      y: direction === 'up' ? -100 : 100,
      opacity: 0
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: (direction) => ({
      y: direction === 'up' ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    })
  };

  return (
    <div>
      <PageNav />
      <main
        className="main"
        data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}
      >
        <div className={styles.container}>
          {selectedRoom && (
            <div className={styles.roomInfo}>
              <h2>Informacje o sali {info}</h2>
              <p>{info}</p>
              <div className={styles.closeBtn} onClick={() => setSelectedRoom(null)}>
                <FaWindowClose className={styles.closeIcon}/>
              </div>
            </div>
          )}
          <div className={styles.mapContainer}>
            <Suspense fallback={<Loader />}>
              <AnimatePresence custom={transitionDirection} mode="wait">
                <motion.div
                  key={selectedLevel}
                  custom={transitionDirection}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={styles.mapWrapper}
                >
                  {renderLevel()}
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </div>
          <div className={styles.levelSelector}>
            <button 
              className={styles.levelBtn} 
              onClick={goDown}
              disabled={selectedLevel === -1}
            >
              {isMobile ? <IoIosArrowForward  className={styles.icon}/> : <IoIosArrowDown className={styles.icon} />}
            </button>
            <div className={styles.currentLevel}>
              <p className={styles.icon}>{selectedLevel}</p>
            </div>
            <button 
              className={styles.levelBtn} 
              onClick={goUp}
              disabled={selectedLevel === 3}
            >
              {isMobile ? <IoIosArrowBack  className={styles.icon}/> : <IoIosArrowUp className={styles.icon} />}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Map;
