import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { useState } from 'react';
import Container from 'component/Layout/Layout.styled';

export const Layout = () => {
  const [showSideBar, setShowSideBar] = useState();

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  return (
    <Container>
      <main>
        {showSideBar && <Sidebar onSideBar={onSideBar} />}
        <Header onSideBar={onSideBar} />
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
