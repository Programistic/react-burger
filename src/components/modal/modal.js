import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalStyles from './modal.module.css';

function Modal({children, modalClose}) {

  const modalRoot = document.getElementById('modal');

  return ReactDOM.createPortal(
    (
      <div className={ModalStyles.modalContainer}>
        <button type='button' className={ModalStyles.button} aria-label="Закрыть модальное окно" onClick={modalClose}>
          <CloseIcon type={'primary'} />
        </button>
        {children}
      </div>
    ),
    modalRoot
  );
}

export default Modal;
