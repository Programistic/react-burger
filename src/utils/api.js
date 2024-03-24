import { dataURL, orderURL } from "./constants";

export const getData = async({state, setState}) => {
  try {
    setState({
      ...state,
      hasError: false,
      isLoading: true,
    });
    const resJson = await fetch(dataURL).then(checkResponse); 
    setState({
      ...state,
      success: resJson.success,
      data: resJson.data,
      isLoading: false,
    });
  } catch (error) {
    setState({ ...state, hasError: true, isLoading: false });
    console.log(error);
  }
};

export const setOrder = async({idArray, state, setState}) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
};
