import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Preloader from '../preloader/preloader';
import { getData, getUser, setOrder } from '../../services/actions/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { OPEN_INGREDIENT_MODAL, OPEN_ORDER_MODAL, CLOSE_MODAL } from '../../services/actions/modal';
import { deleteOrder } from '../../services/actions/constructor-ingredients';
import { resetCounter } from '../../services/actions/all-ingredients';
import { resetCurrentIngredient } from '../../services/actions/current-ingredient';
import Ingredients from '../../pages/ingredients/ingredients';
import Ingredient from '../../pages/ingredient/ingredient';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import UserProfile from '../../pages/user-profile/user-profile';
import UserOrders from '../../pages/user-orders/user-orders';
import NotFound from '../../pages/not-found/not-found';
import Error from '../../pages/error/error';
import ProtectedRouteElement from '../protected-route/protected-route';
import ProtectedAuthUserRouteElement from '../protected-route/protected-auth-user-route';
import ProtectedResetPasswordRouteElement from '../protected-route/protected-reset-password-route';
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AppStyles from './app.module.css';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
      localStorage.getItem('accessToken') && dispatch(getUser());
      dispatch(getData());
    }, []
  );

  const {
    isSuccess,
    isError,
    errorStatus,
    isOrderSuccess,
    isModalVisible,
    isIngredientDetailsVisible,
    isOrderDetailsVisible,
    card,
  } = useSelector(store => ({
    isSuccess: store.data.isSuccess,
    isError: store.error.isError,
    errorStatus: store.error.error,
    isOrderSuccess: store.order.isSuccess,
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
    if (isOrderSuccess) {
      dispatch(deleteOrder());
      dispatch(resetCounter());
    };
    dispatch({type: CLOSE_MODAL});
    navigate('/');
    dispatch(resetCurrentIngredient());
  };

  return (
    <div className={AppStyles.page}>
      { isError && <Navigate to="/error" /> }
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/' element={
            isSuccess
            ? <AppMain onCardClick={handleCardClick} onButtonMakeOrderClick={handleButtonMakeOrderClick} />
            : <Preloader />
          } />
        <Route path='/ingredients' element={ <Ingredients /> }>
          <Route path=':id' element={<Ingredient />} />
        </Route>
        <Route path='/login' element={ <ProtectedAuthUserRouteElement element={ <Login /> } /> } />
        <Route path='/register' element={ <ProtectedAuthUserRouteElement element={ <Register /> } /> } />
        <Route path='/forgot-password' element={ <ProtectedAuthUserRouteElement element={ <ForgotPassword /> } /> } />
        <Route path='/reset-password' element={ <ProtectedResetPasswordRouteElement element={ <ResetPassword /> } /> } />
        <Route path='/profile' element={ <ProtectedRouteElement element={ <Profile /> } /> }>
          <Route path='/profile' element={ <UserProfile /> } />
          <Route path='profile/user-orders' element={ <UserOrders /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/error' element={ <Error errorStatus={errorStatus} /> } />
      </Routes>

      { background &&  (
        <Routes>
          <Route path='/ingredients/:id' element={
            <Modal closeModal={handleCloseModal}>
              { isIngredientDetailsVisible && <IngredientDetails card={card} /> }
            </Modal>
          }>
          </Route>
        </Routes>
        )
      }

      { isModalVisible && isOrderDetailsVisible &&
        <Modal closeModal={handleCloseModal}>
          <OrderDetails onOrderDetailsOkButtonClick={handleCloseModal} />
        </Modal>
      }
    </div>
  );
}

export default App;
