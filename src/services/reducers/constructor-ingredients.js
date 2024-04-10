import {
  CONSTRUCTOR_SET_BUN,
  CONSTRUCTOR_SET_INGREDIENT,
  CONSTRUCTOR_DELETE_INGREDIENT,
  CONSTRUCTOR_UPDATE,
  CONSTRUCTOR_SAVE_ORDER
} from "../actions/constructor-ingredients";

const initialState = {
  bun: null,
  ingredients: [],
  orderIdArray: [],
}

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_SET_BUN: {
      return {
        ...state,
        bun: action.bun,
      };
    }
    case CONSTRUCTOR_SET_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case CONSTRUCTOR_UPDATE: {
      return {
        ...state,
        ingredients: action.newIngredients,
      };
    }
    case CONSTRUCTOR_DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients.filter(item => item.uniqueId !== action.uniqueId)]
      };
    }
    case CONSTRUCTOR_SAVE_ORDER: {
      return {
        ...state,
        orderIdArray: action.orderIdArray,
      };
    }
    default:
      return state;
  }
};
