import { Box } from '@mui/material';
import styles from './styles.module.css';

export const LoadingScreen = () => (
  <Box className={styles.loadingScreen}>
    <Box className={styles.loadingScreen__content}>
      <img
        src='https://brivesoluciones.com/wp-content/uploads/2022/09/lg_brive-1.svg'
        alt='brive logo'
      />
    </Box>
  </Box>
);
