import { AppBar, Box, Container, Toolbar } from '@mui/material';

import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <AppBar>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box width={100}>
            <img
              src='https://brivesoluciones.com/wp-content/uploads/2022/09/lg_brive-1.svg'
              alt='brive logo'
            />
          </Box>
          {/* <NavMenu /> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', color: 'whitesmoke' },
            }}
          >
            <Link to='/'>Scraping</Link>
          </Box>
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
