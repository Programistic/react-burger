import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../services/actions/all-ingredients";
import { SET_ORDER_ERROR, SET_ORDER_REQUEST, SET_ORDER_SUCCESS } from "../services/actions/order";
import { dataURL, orderURL } from "./constants";
import { checkResponse } from "./constants";

export const getData = (dispatch) => {
  dispatch({type: GET_DATA_REQUEST});
  fetch(dataURL)
    .then(checkResponse)
    .then(res => dispatch({type: GET_DATA_SUCCESS, data: res.data}))
    .catch({type: GET_DATA_ERROR});
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
    .catch({type: SET_ORDER_ERROR});
};
