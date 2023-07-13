import { LightMode, ModeNight } from '@mui/icons-material';
import { Stack, Switch, useTheme } from '@mui/material';
import { ColorModeContext } from '../../themes';
import { useCallback, useContext } from 'react';

export const SwitchTheme = () => {
  const { palette } = useTheme();
  const colorMode = useContext(ColorModeContext);

  const _handleChange = useCallback(
    () => colorMode.toggleColorMode(),
    [colorMode],
  );

  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      {palette?.mode === 'dark' ? <ModeNight /> : <LightMode />}
      <Switch color='warning' onChange={_handleChange} />
    </Stack>
  );
};
