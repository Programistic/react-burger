import { getDataRequest, getDataSuccess } from "./all-ingredients";
import { setOrderRequest, setOrderSuccess } from "./order";
import { checkResponse } from "../../utils/constants";
import { setError } from "./error";
import { setUser, resetUser } from "./user";
import {
  dataURL,
  orderURL,
  passwordRecoverURL,
  passwordResetURL,
  registerURL,
  loginURL,
  tokenURL,
  logoutURL,
  userURL
} from "../../utils/constants";

// Запрос на регистрацию нового пользователя
export const register = (state, setState) => (dispatch) => {
  fetch(registerURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": state.email,
      "password": state.password,
      "name": state.name,
    })
  })
    .then(checkResponse)
    .then(res => {
      setState({...state, isSuccess: res.success});
    })
    .catch(err => {dispatch(setError(err)); setState({...state, isError: true})});
};

// Запрос на вход в систему зарегистрированного пользователя, авторизация
export const login = (state, setState) => (dispatch) => {
  fetch(loginURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": state.email,
      "password": state.password,
    })
  })
    .then(checkResponse)
    .then(res => {
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(setUser({user: res.user, loggedIn: true}));
      setState({...state, isSuccess: res.success});
    })
    .catch(err => {dispatch(setError(err)); setState({...state, isError: true})});
};

// Запрос на получение данных пользователя
export const getUser = () => (dispatch) => {
  let typeRequest = 'getUser';
  fetch(userURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      }
    })
    .then(checkResponse)
    .then(res => {
      dispatch(setUser({user: res.user, loggedIn: true}));
    })
    .catch((err) => {
      (err.message === 'jwt expired') ? dispatch(updateToken(typeRequest)) : Promise.reject(err);
    });
};

// Запрос на обновление данных пользователя
export const updateUser = (state, setState) => (dispatch) => {
  let typeRequest = 'updateUser';
  fetch(userURL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({
      "email": state.email,
      "password": state.password,
      "name": state.name,
    })
  })
    .then(checkResponse)
    .then(res => {
      dispatch(setUser({user: res.user, loggedIn: true}));
      setState({...state, user: res.user, isSuccess: res.success});
    })
    .catch((err) => {
      (err.message === 'jwt expired') ? dispatch(updateToken(typeRequest, state, setState)) : Promise.reject(err);
    });
};

// Запрос на обновление токена
export const updateToken = (typeRequest, state, setState) => (dispatch) => {
  fetch(tokenURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': localStorage.getItem('refreshToken'),
    })
  })
    .then(checkResponse)
    .then(res => {
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      typeRequest === 'gerUser' ? dispatch(getUser()) : dispatch(updateUser(state, setState));
    })
    .catch(err => {Promise.reject(err)});
};

// Запрос на обновление пароля
export const recoverPassword = (state, setState) => (dispatch) => {
  fetch(passwordRecoverURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": state.value,
    })
  })
    .then(checkResponse)
    .then(res => {
      dispatch(setUser({isPasswordRecoverRequest: true}));
      setState({...state, isSuccess: res.success, message: res.message});
    })
    .catch(err => {dispatch(setError(err)); setState({...state, isError: true})});
};

// Запрос на сброс пароля
export const resetPassword = (state, setState) => (dispatch) => {
  fetch(passwordResetURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "password": state.password,
      "token": state.token,
    })
  })
    .then(checkResponse)
    .then(res => {
      dispatch(setUser({isPasswordRecoverRequest: false}));
      setState({...state, isSuccess: res.success, message: res.message});
    })
    .catch(err => {dispatch(setError(err)); setState({...state, isError: true})});
};

// Запрос на получение данных об ингредиентах
export const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  fetch(dataURL)
    .then(checkResponse)
    .then(res => dispatch(getDataSuccess(res.data)))
    .catch(err => dispatch(setError(err)));
};

// Запрос на формирование заказа
export const setOrder = (idArray) => (dispatch) => {
  dispatch(setOrderRequest());
  fetch(orderURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "ingredients": idArray,
    })
  })
    .then(checkResponse)
    .then(res => dispatch(setOrderSuccess(res.order.number)))
    .catch(err => dispatch(setError(err)));
};

// Запрос на выход из системы
export const logout = (state, setState) => (dispatch) => {
  fetch(logoutURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "token": localStorage.getItem('refreshToken'),
    })
  })
    .then(checkResponse)
    .then(res => {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      dispatch(resetUser());
      setState({...state, isSuccess: res.success, message: res.message});
    })
    .catch(err => {dispatch(setError(err)); setState({...state, isError: true})});
};
