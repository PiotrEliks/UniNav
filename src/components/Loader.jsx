import { RotatingLines } from "react-loader-spinner";
import { useContext } from 'react';
import styles from './Loader.module.css';
import { ThemeContext } from '../contexts/theme.jsx';

function Loader() {
  const [{ themeName, isContrast }] = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <RotatingLines
        strokeColor={themeName === 'dark' ? 'white' : 'black'}
        strokeWidth="4"
        animationDuration="0.75"
        visible={true}
      />
    </div>
  )
}

export default Loader