import { dataURL, orderURL } from "./constants";

export const getData = async({state, setState}) => {
  const resJson = await fetch(dataURL).then(checkResponse);
  setState({
    ...state,
    success: resJson.success,
    data: resJson.data,
  });
};

export const setOrder = async({idArray, state, setState}) => {
  const order = await fetch(orderURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "ingredients": idArray,
    }),
  }).then(checkResponse);
  setState({
    ...state,
    orderNumber: String(order.order.number),
    isOrderDetailsVisible: true,
    isModalVisible: true,
  });
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
};
