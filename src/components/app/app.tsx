import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import OrderDetails from '../order-details/order-details';
import OrderInfo from '../order-info/order-info';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Preloader from '../preloader/preloader';
import { getData, getUser, setOrder } from '../../services/actions/actions';
import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { OPEN_ORDER_MODAL, CLOSE_MODAL } from '../../services/actions/modal';
import { deleteOrder } from '../../services/actions/constructor-ingredients';
import { resetCounter } from '../../services/actions/all-ingredients';
import Ingredients from '../../pages/ingredients/ingredients';
import Ingredient from '../../pages/ingredient/ingredient';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import UserProfile from '../../pages/user-profile/user-profile';
import OrderFeed from '../../pages/order-feed/order-feed';
import Orders from '../../pages/order/order';
import OrderHistory from '../../pages/order-history/order-history';
import NotFound from '../../pages/not-found/not-found';
import Error from '../../pages/error/error';
import ProtectedRoute from '../protected-route/protected-route';
import ProtectedResetPasswordRoute from '../protected-route/protected-reset-password-route';
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/hooks';
import { WS_CONNECTION_START } from '../../services/actions/ws-actions';
import { wsOpen } from '../../services/actions/ws-actions';
import AppStyles from './app.module.css';


function App() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
      localStorage.getItem('accessToken') && dispatch(getUser() as any);
      dispatch(getData() as any);
      dispatch(wsOpen());
    }, [dispatch]
  );

  const {
    isSuccess,
    isError,
    errorStatus,
    isOrderSuccess,
    isModalVisible,
    isOrderDetailsVisible,
  } = useAppSelector((store) => ({
    isSuccess: store.data.isSuccess,
    isError: store.error.isError,
    errorStatus: store.error.error,
    isOrderSuccess: store.order.isSuccess,
    isModalVisible: store.modal.isModalVisible,
    isOrderDetailsVisible: store.modal.isOrderDetailsVisible,
  }), shallowEqual);

  const handleButtonMakeOrderClick = (idArray: string[]) => {
    dispatch(setOrder(idArray) as any);
    dispatch({type: OPEN_ORDER_MODAL});
  };

  const handleCloseModal = () => {
    if (isOrderSuccess) {
      dispatch(deleteOrder());
      dispatch(resetCounter());
    };
    dispatch({type: CLOSE_MODAL});
    navigate('/');
  };

  const handleCloseOrderInfoModal = () => {
    dispatch({type: CLOSE_MODAL});
    navigate('/profile/orders');
  };

  return (
    <div className={AppStyles.page}>
      { isError && <Navigate to="/error" /> }
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/' element={
            isSuccess
            ? <AppMain  onButtonMakeOrderClick={handleButtonMakeOrderClick} />
            : <Preloader />
          } />
        <Route path='/ingredients' element={ <Ingredients /> }>
          <Route path=':id' element={<Ingredient />} />
        </Route>
        <Route path='/feed' element={ <OrderFeed /> } />
        <Route path='/feed' element={ <Orders /> }>
          <Route path=':number' element={ <OrderInfo /> } />
        </Route>
        <Route path='/login' element={ <ProtectedRoute element={ <Login /> } isAuthAccess={true} /> } />
        <Route path='/register' element={ <ProtectedRoute element={ <Register /> } isAuthAccess={true} /> } />
        <Route path='/forgot-password' element={ <ProtectedRoute element={ <ForgotPassword /> } isAuthAccess={true} /> } />
        <Route path='/reset-password' element={
          <ProtectedRoute element={
            <ProtectedResetPasswordRoute element={
              <ResetPassword />
            } />
          } isAuthAccess={true} /> 
        } />
        <Route path='/profile' element={ <ProtectedRoute element={ <Profile /> } isAuthAccess={false} /> }>
          <Route path='/profile' element={ <UserProfile /> } />
          <Route path='/profile/orders' element={ <OrderHistory /> } >
            <Route path=':number' element={ <OrderInfo /> } />
          </Route>
        </Route>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/error' element={ <Error errorStatus={errorStatus} /> } />
      </Routes>

      { background && (
        <Routes>
          <Route path='/ingredients/:id' element={
            <Modal closeModal={handleCloseModal}>
               <IngredientDetails />
            </Modal>
          }>
          </Route>
          <Route path='/profile/orders' element={
            <Modal closeModal={handleCloseOrderInfoModal}> 
               <OrderInfo />
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
