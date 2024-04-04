import { CURRENT_INGREDIENT_SET, CURRENT_INGREDIENT_COUNTER_INC, CURRENT_INGREDIENT_COUNTER_DEC } from "../actions/current-ingredient";

const initData = {
  card: null,
  counter: 0,
}

export const cardReducer = (state = initData, action) => {
  switch (action.type) {
    case CURRENT_INGREDIENT_SET: {
      return {
        ...state,
        card: action.card,
      };
    }
    case CURRENT_INGREDIENT_COUNTER_INC: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case CURRENT_INGREDIENT_COUNTER_DEC: {
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    }
    default:
      return state;
  }
};
