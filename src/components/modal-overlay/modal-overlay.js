import ModalOverlayStyles from './modal-overlay.module.css';

function ModalOverlay({closeModal}) {

  return(
    <div className={ModalOverlayStyles.modalOverlay} onClick={closeModal} />
  );
}

export default ModalOverlay;
