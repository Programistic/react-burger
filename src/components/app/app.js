import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Preloader from '../preloader/preloader';
import { getData, setOrder } from '../../services/actions/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { OPEN_INGREDIENT_MODAL, OPEN_ORDER_MODAL, CLOSE_MODAL } from '../../services/actions/modal';
import { CURRENT_INGREDIENT_SET } from '../../services/actions/current-ingredient';
import AppStyles from './app.module.css';

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getData());
  }, []);

  const {
    isSuccess,
    isModalVisible,
    isIngredientDetailsVisible,
    isOrderDetailsVisible,
    card,
  } = useSelector(store => ({
    isSuccess: store.data.success,
    isModalVisible: store.modal.isModalVisible,
    isIngredientDetailsVisible: store.modal.isIngredientDetailsVisible,
    isOrderDetailsVisible: store.modal.isOrderDetailsVisible,
    card: store.card.card,
  }), shallowEqual);

  const handleCardClick = () => {
    dispatch({type: OPEN_INGREDIENT_MODAL});
  };

  const handleButtonMakeOrderClick = (idArray) => {
    dispatch(setOrder(idArray));
    dispatch({type: OPEN_ORDER_MODAL});
  };

  const handleCloseModal = () => {
    dispatch({type: CLOSE_MODAL});
    dispatch({type: CURRENT_INGREDIENT_SET, card: null})
  };
 
  return(
    <div className={AppStyles.page}>
      <AppHeader />
      { isSuccess ? <AppMain onCardClick={handleCardClick} onButtonMakeOrderClick={handleButtonMakeOrderClick} /> : <Preloader /> }
      { isModalVisible && <ModalOverlay closeModal={handleCloseModal} /> }
      { isModalVisible &&
        <Modal closeModal={handleCloseModal}>
          { isIngredientDetailsVisible && <IngredientDetails card={card} /> }
          { isOrderDetailsVisible && <OrderDetails onOrderDetailsOkButtonClick={handleCloseModal} /> }
        </Modal>
      }
    </div>
  );
}

export default App;
