import { getDataRequest, getDataSuccess } from "./all-ingredients";
import { setOrderRequest, setOrderSuccess } from "./order";
import { checkResponse } from "../../utils/constants";
import { checkResponseWithToken } from "../../utils/constants";
import { setError } from "./error";
import { setUser, resetUser } from "./user";
import { setLoggedIn, resetLoggedIn } from "./flag";
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
    .catch(err => dispatch(setError(err.status)));
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
      dispatch(setUser({user: res.user}));
      dispatch(setLoggedIn());
      setState({...state, isSuccess: res.success});
    })
    .catch(err => dispatch(setError(err.status)));
};

let typeRequest;

// Запрос на получение данных пользователя
export const getUser = () => (dispatch) => {
  typeRequest = 'getUser';
  fetch(userURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      }
    })
    .then(checkResponseWithToken)
    .then(res => {
      dispatch(setUser({user: res.user}));
      dispatch(setLoggedIn());
    })
    .catch(err => {
      (err.message === 'jwt expired') ? dispatch(updateToken(typeRequest)) : console.log(err);
    });
};

// Запрос на обновление данных пользователя
export const updateUser = (state, setState) => (dispatch) => {
  typeRequest = 'updateUser';
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
    .then(checkResponseWithToken)
    .then(res => {
      dispatch(setUser({user: res.user}));
      setState({...state, name: res.user.name, email: res.user.email, isSuccess: res.success});
    })
    .catch(err => {
      (err.message === 'jwt expired') ? dispatch(updateToken(typeRequest, state, setState)) : console.log(err);
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
      typeRequest === 'getUser' ? dispatch(getUser()) : dispatch(updateUser(state, setState));
    })
    .catch(err => dispatch(setError(err.status)));
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
      localStorage.setItem('isPasswordRecoverRequest', true);
      setState({...state, isSuccess: res.success});
    })
    .catch(err => dispatch(setError(err.status)));
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
      localStorage.setItem('isPasswordRecoverRequest', false);
      setState({...state, isSuccess: res.success});
    })
    .catch(err => dispatch(setError(err.status)));
};

// Запрос на получение данных об ингредиентах
export const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  fetch(dataURL)
    .then(checkResponse)
    .then(res => dispatch(getDataSuccess(res.data)))
    .catch(err => dispatch(setError(err.status)));
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
    .catch(err => dispatch(setError(err.status)));
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
      dispatch(resetLoggedIn());
      setState({...state, isSuccess: res.success});
    })
    .catch(err => dispatch(setError(err.status)));
};
