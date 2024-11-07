import { RotatingLines } from "react-loader-spinner";
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.container}>
      <RotatingLines
        strokeColor="black"
        strokeWidth="4"
        animationDuration="0.75"
        visible={true}
      />
    </div>
  )
}

export default Loader