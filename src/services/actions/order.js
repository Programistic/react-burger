export const SET_ORDER_REQUEST = 'SET_ORDER/REQUEST';
export const SET_ORDER_SUCCESS = 'SET_ORDER/SUCCESS';
export const SET_ORDER_FAILED = 'SET_ORDER/FAILED';

export const setOrderRequest = () => {
  return {
    type: SET_ORDER_REQUEST,
  };
};

export const setOrderSuccess = (item) => {
  return {
    type: SET_ORDER_SUCCESS,
    payload: item,
  };
};

export const setOrderFailed = (item) => {
  return {
    type: SET_ORDER_FAILED,
    payload: item,
  };
};
