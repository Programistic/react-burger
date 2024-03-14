import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppStyles from './app.module.css';
import Preloader from '../preloader/preloader';
import { useEffect, useState } from 'react';
import { dataURL } from '../../utils/constants';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

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
    isModalVisible: false,
    isOrderDetailsVisible: false,
    isIngredientDetailsVisible: false,
  });

  const handleModalClose = () => {
    setModalState({
      isModalVisible: false,
      isIngredientDetailsVisible: false,
      isOrderDetailsVisible: false,
    });
  };

  const handleCardClick = (card) => {
    setModalState({
      isModalVisible: true,
      isIngredientDetailsVisible: true,
    });

    setCardState({
      card: card,
    });
  }

  const handleButtonMakeOrderClick = () => {
    setModalState({
      isModalVisible: true,
      isOrderDetailsVisible: true,
    });
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
      setModalState({ isModalVisible: false });
    };
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay_modalOverlay__Bc71J')) { // подумать над реализацией!
      setModalState({ isModalVisible: false });
    };
  };

  const [cardState, setCardState] = useState({
    card: {},
  })
 
  return(
    <div className={AppStyles.page}>
      <AppHeader />
      { state.success ? <AppMain data={state.data} onCardClick={handleCardClick} onButtonMakeOrderClick={handleButtonMakeOrderClick} /> : <Preloader /> }
      <ModalOverlay isVisible={modalState.isModalVisible} />
      { modalState.isModalVisible &&
        <Modal onClose={handleModalClose}>
          { modalState.isIngredientDetailsVisible && <IngredientDetails card={cardState.card} /> }
          { modalState.isOrderDetailsVisible && <OrderDetails onOrderDetailsOkButtonClick={handleModalClose} /> }
        </Modal>
      }
    </div>
  );
}

export default App;
