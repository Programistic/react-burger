import ReactDOM from 'react-dom';
import ModalOverlayStyles from './modal-overlay.module.css';

function ModalOverlay({closeModal}) {

  const modalOverlayRoot = document.getElementById('overlay');

  return ReactDOM.createPortal(
    (
      <div className={ModalOverlayStyles.modalOverlay} onClick={closeModal}></div>
    ),
    modalOverlayRoot
  );
}

export default ModalOverlay;
