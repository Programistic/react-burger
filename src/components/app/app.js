import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import AppStyles from './app.module.css';
import Preloader from '../preloader/preloader';
import { useEffect, useState } from 'react';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getData, setOrder } from '../../utils/api';

function App() {

  const [state, setState] = useState({
    success: false,
    data: [],
    orderNumber: '',
    card: {},
    isModalVisible: false,
    isOrderDetailsVisible: false,
    isIngredientDetailsVisible: false,
  });

  useEffect(() => {    
      getData({state, setState})
        .catch(error => console.log(error));
  }, []);

  const handleCardClick = (card) => {
    setState({
      ...state,
      card: card,
      isModalVisible: true,
      isIngredientDetailsVisible: true,
    });
  };

  const handleButtonMakeOrderClick = (idArray) => {
    setOrder({idArray, state, setState})
      .catch(error => console.log(error));
  };

  const handleCloseModal = () => {
    setState({
      ...state,
      orderNumber: '',
      isModalVisible: false,
      isOrderDetailsVisible: false,
      isIngredientDetailsVisible: false,
    });
  };
 
  return(
    <div className={AppStyles.page}>
      <AppHeader />
      { state.success ? <AppMain data={state.data} onCardClick={handleCardClick} onButtonMakeOrderClick={handleButtonMakeOrderClick} /> : <Preloader /> }
      { state.isModalVisible && <ModalOverlay closeModal={handleCloseModal} /> }
      { state.isModalVisible &&
        <Modal closeModal={handleCloseModal}>
          { state.isIngredientDetailsVisible && <IngredientDetails card={state.card} /> }
          { state.isOrderDetailsVisible && <OrderDetails orderNumber={state.orderNumber} onOrderDetailsOkButtonClick={handleCloseModal} /> }
        </Modal>
      }
    </div>
  );
}

export default App;
