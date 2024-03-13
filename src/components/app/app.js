import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppStyles from './app.module.css';
import Preloader from '../preloader/preloader';
import { useEffect, useState } from 'react';
import { dataURL } from '../../utils/constants';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';

function App() {

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    success: false,
    data: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    try {
      setState({ ...state, hasError: false, isLoading: true });
      const res = await fetch(dataURL);
      const resJson = await res.json();  
      setState({ ...state, success: resJson.success, data: resJson.data, isLoading: false });
    } catch (error) {
      setState({ ...state, hasError: true, isLoading: false });
      console.log(error);
    }
  };

  const [modalState, setModalState] = useState({
    isVisible: false,
  });

  const handleModalClose = () => {
    setModalState({ isVisible: false });
  };

  const handleCardClick = () => {
    setModalState({ isVisible: true });
  }

  const handleButtonMakeOrderClick = () => {
    setModalState({ isVisible: true });
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscClick);
    document.addEventListener('click', handleOutsideClick);
  
    return () => {
      document.removeEventListener('keydown', handleEscClick);
      document.removeEventListener('click', handleOutsideClick);
    }
  
  },[]);

  const handleEscClick = (event) => {
    if(event.key === 'Escape') {
      setModalState({ isVisible: false });
    };
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay_modalOverlay__Bc71J')) { // подумать над классом!
      setModalState({ isVisible: false });
    };
  };

  return(
    <div className={AppStyles.page}>
      <AppHeader />
      { state.success ? <AppMain data={state.data} onCardClick={handleCardClick} onButtonMakeOrderClick={handleButtonMakeOrderClick} /> : <Preloader /> }
      <ModalOverlay isVisible={modalState.isVisible} />
      { modalState.isVisible &&
        <Modal onClose={handleModalClose}>
          
        </Modal>
      }
    </div>
  );
}

export default App;
