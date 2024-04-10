import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import ModalStyles from './modal.module.css';

function Modal({children, closeModal}) {

  const modalRoot = document.getElementById('modal');

  useEffect(() => {
    const handleEscClick = (event) => {
      if(event.key === 'Escape') {
        closeModal();
      };
    };
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('keydown', handleEscClick);
    }
  },[]);

  return ReactDOM.createPortal(
    ( 
      <div className={ModalStyles.modalContainer}>
        <ModalOverlay closeModal={closeModal} />
        <button type='button' className={ModalStyles.button} aria-label="Закрыть модальное окно" onClick={closeModal}>
          <CloseIcon type={'primary'} />
        </button>
        {children}
      </div>
    ),
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};
