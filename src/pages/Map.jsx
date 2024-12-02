import React, { useContext, useState, useMemo, useCallback } from 'react';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer.jsx';
import { ThemeContext } from '../contexts/theme.jsx';
import styles from './Map.module.css';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';
import MetaDecorator from '../components/MetaDecorator.jsx';
import Ground from '../components/Ground.jsx';
import Basement from '../components/Basement.jsx';
import LevelOne from '../components/LevelOne.jsx';
import LevelTwo from '../components/LevelTwo.jsx';
import LevelThree from '../components/LevelThree.jsx';
import debounce from 'lodash.debounce';

const MemoizedGround = React.memo(Ground);
const MemoizedBasement = React.memo(Basement);
const MemoizedLevelOne = React.memo(LevelOne);
const MemoizedLevelTwo = React.memo(LevelTwo);
const MemoizedLevelThree = React.memo(LevelThree);

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
  const [info, setInfo] = useState(null);

  const levelNames = {
    '-1': 'Basement',
    '0': 'Ground',
    '1': 'LevelOne',
    '2': 'LevelTwo',
    '3': 'LevelThree'
  };

  const maps = useMemo(() => ({
    Basement: <MemoizedBasement setSelectedRoom={setSelectedRoom} setInfo={setInfo} />,
    Ground: <MemoizedGround setSelectedRoom={setSelectedRoom} setInfo={setInfo} />,
    LevelOne: <MemoizedLevelOne setSelectedRoom={setSelectedRoom} setInfo={setInfo} />,
    LevelTwo: <MemoizedLevelTwo setSelectedRoom={setSelectedRoom} setInfo={setInfo} />,
    LevelThree: <MemoizedLevelThree setSelectedRoom={setSelectedRoom} setInfo={setInfo} />,
  }), [setSelectedRoom, setInfo]);

  const renderLevel = () => {
    switch (selectedLevel) {
      case -1:
        return maps.Basement;
      case 0:
        return maps.Ground;
      case 1:
        return maps.LevelOne;
      case 2:
        return maps.LevelTwo;
      case 3:
        return maps.LevelThree;
      default:
        return maps.Ground;
    }
  };

  const setValidSelectedLevel = (newLevel) => {
    const validLevels = [-1, 0, 1, 2, 3];
    if (validLevels.includes(newLevel) && newLevel !== selectedLevel) {
      const direction = newLevel > selectedLevel ? 'up' : 'down';
      setState({
        selectedLevel: newLevel,
        transitionDirection: direction
      });
      setSelectedRoom(null);
      setInfo(null);
    }
  };

  const setValidSelectedLevelDebounced = useMemo(
    () => debounce(setValidSelectedLevel, 5),
    [selectedLevel]
  );

  const goUp = useCallback(() => {
    setValidSelectedLevelDebounced(selectedLevel + 1);
  }, [selectedLevel, setValidSelectedLevelDebounced]);

  const goDown = useCallback(() => {
    setValidSelectedLevelDebounced(selectedLevel - 1);
  }, [selectedLevel, setValidSelectedLevelDebounced]);

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  return (
    <>
      <MetaDecorator title={t('Map.title')} />
      <PageNav />
      <main
        className="main"
        data-theme={isContrast ? 'contrast' : themeName === 'dark' ? 'dark' : 'light'}
      >
        <div className={styles.main}>
          <h1>{t('Map.Header')}</h1>
          <p className={styles.text}>{t('Map.text')}</p>
          <div className={styles.container}>
            <div className={styles.mapContainer}>
              <AnimatePresence custom={transitionDirection}>
                <motion.div
                  key={levelNames[selectedLevel]}
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
            </div>
            <div className={styles.levelSelector}>
              <button
                className={styles.levelBtn}
                onClick={goDown}
                disabled={selectedLevel === -1}
              >
                {isMobile ? <IoIosArrowForward className={styles.icon} /> : <IoIosArrowDown className={styles.icon} />}
              </button>
              <div className={styles.currentLevel}>
                <p className={styles.icon}>{selectedLevel}</p>
              </div>
              <button
                className={styles.levelBtn}
                onClick={goUp}
                disabled={selectedLevel === 3}
              >
                {isMobile ? <IoIosArrowBack className={styles.icon} /> : <IoIosArrowUp className={styles.icon} />}
              </button>
            </div>
          </div>
          {selectedRoom && info && (
            <div className={styles.roomInfo}>
              <h2 className={styles.roomInfoTitle}>{info.title}</h2>
              {typeof info.info === 'string' ? (
                <p className={styles.roomInfoText}>{info.info}</p>
              ) : typeof info.info === 'object' ? (
                <ul>
                  {Object.entries(info.info).map(([roomNumber, description]) => (
                    <li key={roomNumber}>
                      <strong>Sala {roomNumber}:</strong> {description}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Map;
