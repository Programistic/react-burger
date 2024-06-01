import ModalOverlayStyles from './modal-overlay.module.css';
import { FC } from 'react';

interface IModalProps {
  closeModal: () => void,
}

const ModalOverlay: FC<IModalProps> = ({ closeModal }) => {

  return(
    <div className={ModalOverlayStyles.modalOverlay} onClick={closeModal} />
  );
}

export default ModalOverlay;
