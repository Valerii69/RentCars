import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'component/Header/Header';
import Sidebar from 'component/Sidebar/Sidebar';
import { useState } from 'react';
import { Box } from './Layout.styled';

export const Layout = () => {
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
