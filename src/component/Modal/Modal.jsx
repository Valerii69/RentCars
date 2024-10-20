import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import close_cross_icon from '../../images/close_cross_icon.png';
import * as s from './Modal.styled';

const ModalRoot = document.getElementById('modal-root');

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <s.Backdrop onClick={handleBackdropClick}>
      <s.ModalField>
        <s.CloseButton type="button" onClick={closeModal}>
          <s.IconBtn>
            <img
              src={close_cross_icon}
              alt="close icon"
              width="15px"
              height="15px"
            />
          </s.IconBtn>
        </s.CloseButton>
        {children}
      </s.ModalField>
    </s.Backdrop>,
    ModalRoot
  );
};

export default Modal;
