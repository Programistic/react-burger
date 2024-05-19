import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../services/reducers/root-reducer';
import { thunk } from 'redux-thunk';
export const apiURL = 'https://norma.nomoreparties.space/api';
export const dataURL = `${apiURL}/ingredients`;
export const orderURL = `${apiURL}/orders`;
export const passwordRecoverURL = `${apiURL}/password-reset`;
export const passwordResetURL = `${apiURL}/password-reset/reset`;
export const authURL = `${apiURL}/auth`;
export const registerURL = `${authURL}/register`;
export const loginURL = `${authURL}/login`;
export const logoutURL = `${authURL}/logout`;
export const tokenURL = `${authURL}/token`;
export const userURL = `${authURL}/user`;

export const checkResponse = (res: any) => {
  return res.ok ? res.json() : Promise.reject(res);
};

export const checkResponseWithToken = (res: any) => {
  return res.ok ? res.json() : res.json().then((err: number) => Promise.reject(err));
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const enhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({} as any)
    : compose;


export const store = createStore(
  rootReducer,
  enhancer(applyMiddleware(thunk))
);
