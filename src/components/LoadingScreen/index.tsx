import { Box } from '@mui/material';
import styles from './styles.module.css';

export const LoadingScreen = () => (
  <Box className={styles.loadingScreen}>
    <Box className={styles.loadingScreen__content}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='300'
        height='127'
        viewBox='0 0 300 128'
        fill='none'
      >
        <path
          d='M74.7813 9.64551C77.9833 9.64551 80.2088 12.0966 80.2088 15.1377C80.2088 18.1788 77.9606 20.5618 74.7813 20.5618C71.8519 20.6299 69.3993 18.2923 69.3539 15.3647C69.3539 15.2966 69.3539 15.2058 69.3539 15.1377C69.3539 12.0966 71.6702 9.64551 74.7813 9.64551Z'
          fill='#AADB1E'
        />
        <path
          d='M28.2959 39.3987H21.5286V49.0668H28.2959C31.3389 49.0668 33.6325 47.5689 33.6325 44.2781C33.6325 40.9873 31.3389 39.3987 28.2959 39.3987ZM27.819 21.6285H21.5286V30.1391H27.819C30.3851 30.1391 32.3608 28.7774 32.3608 25.8724C32.3608 22.9675 30.4078 21.6285 27.819 21.6285ZM11.9227 12.3689H27.8871C36.2668 12.3689 42.2393 17.3164 42.2393 24.6015C42.2393 29.5944 40.0819 32.9079 36.7664 34.6781C40.8313 36.6299 43.5337 40.2157 43.5337 45.6171C43.5337 53.1973 37.1751 58.3263 28.3186 58.3263H11.9227V12.3689Z'
          fill='#5B6770'
        />
        <path
          d='M55.5241 28.3235C57.1364 25.8271 59.7252 23.9888 63.4949 23.9888C64.3806 23.9888 65.2663 24.0569 66.1292 24.193V33.9973C64.585 33.2937 62.8818 32.9533 61.2013 32.976C57.9539 32.976 55.7285 35.2001 55.5241 38.7859V52.3349C55.5241 55.6483 52.8444 58.3264 49.5289 58.3264H46.3269V24.6696H55.5241V28.3235Z'
          fill='#5B6770'
        />
        <path
          d='M73.3961 58.3262H70.1941V24.6694H79.3913V52.3347C79.3913 55.6482 76.7116 58.3262 73.3961 58.3262Z'
          fill='#5B6770'
        />
        <path
          d='M94.3111 28.051L100.965 46.9106L107.687 28.051C108.413 26.0311 110.321 24.6694 112.478 24.6694H118.633L107.301 54.468C106.415 56.7829 104.19 58.3262 101.692 58.3262H96.1505L83.4335 24.6694H89.5195C91.6769 24.6694 93.6071 26.0311 94.3111 28.051Z'
          fill='#5B6770'
        />
        <path
          d='M136.845 25.4639C140.774 25.4639 143.681 27.8242 143.817 31.2738H129.283C129.737 28.1192 132.78 25.4639 136.845 25.4639ZM138.185 44.5958C133.462 44.5958 130.078 42.0994 129.26 38.2412H152.128C152.469 36.7887 152.651 35.3362 152.673 33.8384C152.673 25.1235 146.655 17.8157 136.913 17.8157C127.171 17.8157 120.063 25.4639 120.063 35.3135C120.063 45.7987 127.444 52.8795 137.436 52.8795C142.295 52.8795 146.633 51.7901 149.608 50.2469L147.677 46.9788C146.497 44.9589 144.203 43.8923 141.909 44.2554C140.683 44.505 139.434 44.5958 138.185 44.5958Z'
          fill='#5B6770'
        />
        <path
          d='M156.239 17.7703C156.716 17.7703 157.215 17.9064 157.624 18.1334C158.078 18.383 158.441 18.7235 158.669 19.1774C159.168 20.0625 159.168 21.1291 158.669 22.0142C158.419 22.4454 158.055 22.8086 157.624 23.0582C156.761 23.5575 155.671 23.5575 154.808 23.0582C154.377 22.8086 154.013 22.4454 153.763 22.0142C153.264 21.1291 153.264 20.0625 153.763 19.1774C154.013 18.7461 154.377 18.383 154.808 18.1334C155.262 17.8837 155.739 17.7703 156.239 17.7703ZM156.239 18.3149C155.853 18.3149 155.467 18.4284 155.126 18.61C154.763 18.8142 154.467 19.0866 154.286 19.4497C153.877 20.1532 153.877 21.0157 154.286 21.7192C154.49 22.0823 154.763 22.3547 155.126 22.5589C155.83 22.9674 156.693 22.9674 157.397 22.5589C157.76 22.3547 158.033 22.0596 158.237 21.7192C158.646 21.0157 158.646 20.1532 158.237 19.4497C158.033 19.0866 157.738 18.7915 157.374 18.61C157.034 18.4284 156.647 18.3149 156.239 18.3149ZM154.967 22.105V19.1093H155.58C156.148 19.1093 156.466 19.1093 156.534 19.1093C156.693 19.1093 156.852 19.1547 157.011 19.2227C157.124 19.2908 157.215 19.4043 157.283 19.5178C157.351 19.654 157.397 19.7901 157.397 19.949C157.397 20.1532 157.329 20.3575 157.192 20.4937C157.034 20.6525 156.829 20.766 156.602 20.7887C156.67 20.8114 156.738 20.8568 156.806 20.9022C156.875 20.9703 156.943 21.0383 157.011 21.1291C157.034 21.1518 157.102 21.288 157.238 21.4922L157.601 22.105H156.852L156.602 21.6057C156.511 21.3788 156.352 21.1745 156.193 20.993C156.08 20.9022 155.921 20.8568 155.785 20.8568H155.626V22.0823L154.967 22.105ZM155.58 20.4029H155.83C156.057 20.4029 156.261 20.4029 156.489 20.3575C156.579 20.3348 156.647 20.2894 156.693 20.2213C156.784 20.0852 156.784 19.9036 156.693 19.7674C156.647 19.6993 156.579 19.654 156.489 19.6313C156.261 19.5859 156.057 19.5859 155.83 19.5859H155.58V20.4029Z'
          fill='#5B6770'
        />
        <path
          d='M123.015 15.2963C122.834 15.5687 122.062 16.5673 122.856 17.2481L123.969 18.5417C124.219 18.8368 124.673 18.8595 124.946 18.6098C124.968 18.5871 124.991 18.5644 125.014 18.5417C126.694 16.8396 132.462 12.119 143.408 14.2751C144.226 14.4112 145.02 14.0027 145.361 13.2538L148.109 7.62541C148.313 7.1942 148.132 6.67222 147.7 6.46796C147.655 6.44527 147.609 6.42257 147.564 6.42257C143.976 5.53747 131.281 3.35874 123.015 15.2963Z'
          fill='#AADB1E'
        />
      </svg>
    </Box>
  </Box>
);