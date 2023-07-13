import { AirplayOutlined } from '@mui/icons-material';
import { AppBar, Box, Container, Toolbar } from '@mui/material';

import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <AppBar>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AirplayOutlined
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          {/* <NavMenu /> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/'>Brive</Link>
          </Box>
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
