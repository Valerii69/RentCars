import { Outlet } from 'react-router-dom';
import { Header, Box, LogoHeader } from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  return (
    <Box>
      <Header>
        <LogoHeader />
        <Navigation />
      </Header>

      <Outlet />
    </Box>
  );
};
