import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppStyles from './app.module.css';
import Preloader from '../preloader/preloader';
import { useEffect, useState } from 'react';
import { dataURL, checkResponse } from '../../utils/constants';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { orderNumber } from '../../utils/test-data';

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
      const resJson = await fetch(dataURL).then(checkResponse); 
      setState({ ...state, success: resJson.success, data: resJson.data, isLoading: false });
    } catch (error) {
      setState({ ...state, hasError: true, isLoading: false });
      console.log(error);
    }
  };

  const [cardState, setCardState] = useState({
    card: {},
  })

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

  const [modalState, setModalState] = useState({
    isModalVisible: false,
    isOrderDetailsVisible: false,
    isIngredientDetailsVisible: false,
  });

  const handleCloseModal = () => {
    setModalState({
      isModalVisible: false,
    })
  }
 
  return(
    <div className={AppStyles.page}>
      <AppHeader />
      { state.success ? <AppMain data={state.data} onCardClick={handleCardClick} onButtonMakeOrderClick={handleButtonMakeOrderClick} /> : <Preloader /> }
      { modalState.isModalVisible && <ModalOverlay closeModal={handleCloseModal} /> }
      { modalState.isModalVisible &&
        <Modal closeModal={handleCloseModal}>
          { modalState.isIngredientDetailsVisible && <IngredientDetails card={cardState.card} /> }
          { modalState.isOrderDetailsVisible && <OrderDetails orderNumber={orderNumber} onOrderDetailsOkButtonClick={handleCloseModal} /> }
        </Modal>
      }
    </div>
  );
}

export default App;
