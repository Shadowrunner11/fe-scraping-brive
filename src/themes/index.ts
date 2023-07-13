import { createTheme } from '@mui/material';
import { createContext } from 'react';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const ColorModeContext = createContext({
  toggleColorMode() {
    return;
  },
});
