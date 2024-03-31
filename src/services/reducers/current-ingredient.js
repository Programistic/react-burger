import { CURRENT_INGREDIENT } from "../actions/current-ingredient";

const initData = {
  card: {},
}

export const cardReducer = (state = initData, action) => {
  switch (action.type) {
    case CURRENT_INGREDIENT: {
      return {
        ...state,
        card: action.card,
      };
    }
    default:
      return state;
  }
};
