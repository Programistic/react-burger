import {
  SET_ORDER_REQUEST,
  SET_ORDER_SUCCESS,
  SET_ORDER_FAILED
} from "../actions/order";

const initData = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  orderNumber: '',
  error: '',
};

export const orderReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    }
    case SET_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.payload,
        isSuccess: true,
        isLoading: false,
      };
    }
    case SET_ORDER_FAILED: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
