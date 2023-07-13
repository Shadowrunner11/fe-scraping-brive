import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { ColorModeContext, darkTheme, lightTheme } from '../../themes';

export const ColorModeWrapper = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [colorMode, setColorMode] = useState<string>(
    localStorage.getItem('mode') ?? (!prefersDarkMode ? 'dark' : 'light'),
  );

  const colorModeOptions = useMemo(
    () => ({
      toggleColorMode() {
        setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  useEffect(() => {
    localStorage.setItem('mode', colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={colorModeOptions}>
      <ThemeProvider theme={colorMode === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
