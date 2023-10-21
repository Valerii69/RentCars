import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Box } from './AppBar.styled';
import { Header } from 'component/Header/Header';
// import { Navigation } from '../Navigation/Navigation';
import Sidebar from 'component/Sidebar/Sidebar';
import { useState } from 'react';
import { Box } from './AppBar.styled';

export const AppBar = () => {
  const [showSideBar, setShowSideBar] = useState();

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  return (
    <Box>
      {showSideBar && <Sidebar onSideBar={onSideBar} />}
      <Header onSideBar={onSideBar} />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};
