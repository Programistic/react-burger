import { CONSTRUCTOR_INGREDIENTS } from "../actions/constructor-ingredients";

const initialState = {
  idArray: [],
}

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state,
        idArray: action.idArray,
      };
    }
    default:
      return state;
  }
};
