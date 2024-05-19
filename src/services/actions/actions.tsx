import { getDataRequest, getDataSuccess } from "./all-ingredients";
import { setOrderRequest, setOrderSuccess } from "./order";
import { checkResponse } from "../../utils/constants";
import { checkResponseWithToken } from "../../utils/constants";
import { setError } from "./error";
import { setUser, resetUser } from "./user";
import { setLoggedIn, resetLoggedIn } from "./flag";
import { setIsPasswordResetRequest, resetIsPasswordResetRequest } from "./flag";
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
import { TDispatch } from "../../types/dispatch";
import { TUser } from "../../types/user";
import { TLogin } from "../../types/login";

type TGetUserFn = () => any;
type TGetDataFn = () => any;
type TSetOrderFn = (id: string[]) => any;
type TLoginFn = (state: TLogin, setState: any) => any;
type TLoguotFn = (state: TUser & TResult, setState: any) => any;
type TRegisterFn = (state: TUser & TResult, setState: any) => any;
type TResetPasswordFn = (state: TPassword & TResult, setState: any) => any;
type TUpdateUserFn = (state: TUser, setState: any) => any;
type TUpdateTokenFn = (typeRequest: string, state: TUser, setState: any) => any;
type TRecoverPasswordFn = (state: TValue & TResult, setState: any) => any;
type THeader = {
  authorization: string,
};

type TResult = {
  isSuccess: boolean,
};

type TPassword = {
  password: string,
  token: string,
};

type TValue = {
  value: string,
}

// Запрос на регистрацию нового пользователя
export const register: TRegisterFn = (state, setState) => (dispatch: TDispatch) => {
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
export const login: TLoginFn = (state, setState) => (dispatch: TDispatch) => {
  console.log(typeof(setState))
  console.log(setState)
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
      dispatch(setUser({ user: res.user } as unknown as TUser));
      dispatch(setLoggedIn());
      setState({...state, isSuccess: res.success});
    })
    .catch(err => dispatch(setError(err.status)));
};

let typeRequest: string;
let emptyUser: {
  name: '',
  email: '',
  password: '',
};

// Запрос на получение данных пользователя
export const getUser: TGetUserFn = () => (dispatch: TDispatch) => {
  typeRequest = 'getUser';
  fetch(userURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      } as THeader,
    })
    .then(checkResponseWithToken)
    .then(res => {
      dispatch(setUser({ user: res.user } as unknown as TUser));
      dispatch(setLoggedIn());
    })
    .catch(err => {
      (err.message === 'jwt expired') ? dispatch(updateToken(typeRequest, emptyUser, null)) : console.log(err);
    });
};

// Запрос на обновление данных пользователя
export const updateUser: TUpdateUserFn = (state, setState) => (dispatch: TDispatch) => {
  typeRequest = 'updateUser';
  fetch(userURL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken'),
    } as THeader,
    body: JSON.stringify({
      "email": state.email,
      "password": state.password,
      "name": state.name,
    })
  })
    .then(checkResponseWithToken)
    .then(res => {
      dispatch(setUser({ user: res.user } as unknown as TUser));
      setState({...state, name: res.user.name, email: res.user.email, isSuccess: res.success});
    })
    .catch(err => {
      (err.message === 'jwt expired') ? dispatch(updateToken(typeRequest, state, setState)) : console.log(err);
    });
};

// Запрос на обновление токена
export const updateToken: TUpdateTokenFn = (typeRequest, state, setState) => (dispatch: TDispatch) => {
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
export const recoverPassword: TRecoverPasswordFn = (state, setState) => (dispatch: TDispatch) => {
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
      dispatch(setIsPasswordResetRequest());
      setState({...state, isSuccess: res.success});
    })
    .catch(err => dispatch(setError(err.status)));
};

// Запрос на сброс пароля
export const resetPassword: TResetPasswordFn = (state, setState) => (dispatch: TDispatch) => {
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
      dispatch(resetIsPasswordResetRequest());
      setState({...state, isSuccess: res.success});
    })
    .catch(err => dispatch(setError(err.status)));
};

// Запрос на получение данных об ингредиентах
export const getData: TGetDataFn = () => (dispatch: TDispatch) => {
  dispatch(getDataRequest());
  fetch(dataURL)
    .then(checkResponse)
    .then(res => dispatch(getDataSuccess(res.data)))
    .catch(err => dispatch(setError(err.status)));
};

// Запрос на формирование заказа
export const setOrder: TSetOrderFn = (idArray) => (dispatch: TDispatch) => {
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
export const logout: TLoguotFn = (state, setState) => (dispatch: TDispatch) => {
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
