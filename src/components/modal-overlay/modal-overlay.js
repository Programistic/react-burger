import ReactDOM from 'react-dom';
import ModalOverlayStyles from './modal-overlay.module.css';

function ModalOverlay({isVisible}) {

  const modalOverlayRoot = document.getElementById('overlay');
  const modalClosed = isVisible ? '' : ModalOverlayStyles.modalClosed;

  return ReactDOM.createPortal(
    (
      <div className={`${ModalOverlayStyles.modalOverlay} ${modalClosed}`}></div>
    ),
    modalOverlayRoot
  );
}

export default ModalOverlay;
