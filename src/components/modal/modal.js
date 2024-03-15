import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './modal.module.css';

function Modal({children, closeModal}) {

  const modalRoot = document.getElementById('modal');

  useEffect(() => {
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('keydown', handleEscClick);
    }
  },[]);

  const handleEscClick = (event) => {
    if(event.key === 'Escape') {
      closeModal();
    };
  };

  return ReactDOM.createPortal(
    (
      <div className={ModalStyles.modalContainer}>
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
