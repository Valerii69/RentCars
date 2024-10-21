import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Header from 'component/Header/Header';
import Sidebar from 'component/Sidebar/Sidebar';
import Modal from 'component/Modal/Modal';
import { Box } from './Layout.styled';

export const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false); // Стан для модального вікна

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState); 
  };

  return (
    <Box>
      {showSideBar && <Sidebar onSideBar={onSideBar} />}
      {/* Передаємо toggleModal як пропс Modal */}
      <Header Modal={toggleModal} />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <Sidebar onSideBar={onSideBar} toggleModal={toggleModal} />
        </Modal>
      )}
    </Box>
  );
};
