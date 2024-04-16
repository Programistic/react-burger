import { getDataRequest, getDataSuccess } from "./all-ingredients";
import { setOrderRequest, setOrderSuccess } from "./order";
import { dataURL, orderURL, passwordRecoverURL, passwordResetURL, registerURL, loginURL } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";
import { setError } from "./error";
import { setUser } from "./user";

export const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  fetch(dataURL)
    .then(checkResponse)
    .then(res => dispatch(getDataSuccess(res.data)))
    .catch(res => dispatch(setError(res.status)));
};

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
    .catch(res => dispatch(setError(res.status)));
};

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
    .then(res => setState({...state, isSuccess: res.success, message: res.message}))
    .catch(res => {dispatch(setError(res.status)); setState({...state, isError: true})});
};

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
    .then(res => setState({...state, isSuccess: res.success, message: res.message}))
    .catch(res => {dispatch(setError(res.status)); setState({...state, isError: true})});
};

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
      dispatch(setUser({user: res.user, accessToken: res.accessToken, refreshToken: res.refreshToken}));
      setState({...state, isSuccess: res.success});
    })
    .catch(res => {dispatch(setError(res.status)); setState({...state, isError: true})});
};
