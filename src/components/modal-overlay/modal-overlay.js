import ModalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({closeModal}) {

  return(
    <div className={ModalOverlayStyles.modalOverlay} onClick={closeModal} />
  );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
