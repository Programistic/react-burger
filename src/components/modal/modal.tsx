import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { FC } from 'react';
import ModalStyles from './modal.module.css';

interface IModalProps {
  children: React.ReactNode,
  closeModal: () => void,
}

type TEvent = {
  key: string,
}

const Modal: FC<IModalProps> = ({ children, closeModal }) => {

  const modalRoot = document.getElementById('modal') as HTMLElement;

  useEffect(() => {
    const handleEscClick = (event: TEvent) => {
      if(event.key === 'Escape') {
        closeModal();
      };
    };
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('keydown', handleEscClick);
    }
    }, []
  );

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
