import { SET_ORDER_REQUEST, SET_ORDER_SUCCESS, SET_ORDER_ERROR } from "../actions/order";

const initData = {
  orderNumber: '',
}

export const orderReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        success: true,
        isLoading: false,
      };
    }
    case SET_ORDER_ERROR: {
      return {
        ...state,
        isError: true,
        success: false,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
