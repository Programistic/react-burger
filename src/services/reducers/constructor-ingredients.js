import {
  CONSTRUCTOR_SET_BUN,
  CONSTRUCTOR_SET_INGREDIENT,
  CONSTRUCTOR_DELETE_INGREDIENT,
  CONSTRUCTOR_UPDATE,
  CONSTRUCTOR_SAVE_ORDER
} from "../actions/constructor-ingredients";
import uuid from "react-uuid";

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
      const oldId = action.ingredient._id;
      action.ingredient._id = uuid();
      action.ingredient.oldId = oldId;
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
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
        ingredients: [...state.ingredients.filter(item => item._id !== action.id)]
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
