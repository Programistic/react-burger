import { CURRENT_INGREDIENT_SET } from "../actions/current-ingredient";

const initData = {
  card: null,
}

export const cardReducer = (state = initData, action) => {
  switch (action.type) {
    case CURRENT_INGREDIENT_SET: {
      return {
        ...state,
        card: action.card,
      };
    }
    default:
      return state;
  }
};
