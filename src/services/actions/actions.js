import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./all-ingredients";
import { SET_ORDER_ERROR, SET_ORDER_REQUEST, SET_ORDER_SUCCESS } from "./order";
import { dataURL, orderURL } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";

export const getData = (dispatch) => {
  dispatch({type: GET_DATA_REQUEST});
  fetch(dataURL)
    .then(checkResponse)
    .then(res => dispatch({type: GET_DATA_SUCCESS, data: res.data}))
    .catch(err => dispatch({type: GET_DATA_ERROR, err}));
};

export const setOrder = (idArray) => (dispatch) => {
  dispatch({type: SET_ORDER_REQUEST});
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
    .then(res => dispatch({type: SET_ORDER_SUCCESS, order: res.order.number}))
    .catch(err => dispatch({type: SET_ORDER_ERROR, err}));
};
