import { OPEN_INGREDIENT_MODAL, OPEN_ORDER_MODAL, CLOSE_MODAL } from "../actions/modal";

const initialState = {
  isModalVisible: false,
  isIngredientDetailsVisible: false,
  isOrderDetailsVisible: false,
  orderNumber: '',
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL: {
      return {
        ...state,
        isModalVisible: true,
        isIngredientDetailsVisible: true,
      };
    }
    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        isModalVisible: true,
        isOrderDetailsVisible: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isModalVisible: false,
        isIngredientDetailsVisible: false,
        isOrderDetailsVisible: false,
        orderNumber: '',
      };
    }
    default:
      return state;
  }
};
