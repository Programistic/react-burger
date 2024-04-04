import { CONSTRUCTOR_SET_BUN, CONSTRUCTOR_SET_INGREDIENT, CONSTRUCTOR_DELETE_INGREDIENT, CONSTRUCTOR_UPDATE } from "../actions/constructor-ingredients";

const initialState = {
  idArray: [],
  bun: null,
  ingredients: [],
}

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_SET_BUN: {
      return {
        ...state,
        idArray: action.idArray,
        bun: action.bun,
      };
    }
    case CONSTRUCTOR_SET_INGREDIENT: {
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
    default:
      return state;
  }
};
