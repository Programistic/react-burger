import { getDataRequest, getDataSuccess, getDataFailed } from "./all-ingredients";
import { setOrderRequest, setOrderSuccess, setOrderFailed } from "./order";
import { dataURL, orderURL } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";

export const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  fetch(dataURL)
    .then(checkResponse)
    .then(res => dispatch(getDataSuccess(res.data)))
    .catch(err => dispatch(getDataFailed(err)));
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
    .catch(err => dispatch(setOrderFailed(err)));
};
