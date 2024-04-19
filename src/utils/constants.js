import PropTypes from 'prop-types';
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

export const cardType = PropTypes.shape(
  {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }
);

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
};

const enhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


export const store = createStore(
  rootReducer,
  enhancer(applyMiddleware(thunk))
);
