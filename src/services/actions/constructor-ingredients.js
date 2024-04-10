import uuid from "react-uuid";

export const CONSTRUCTOR_SET_BUN = 'CONSTRUCTOR_SET_BUN';
export const CONSTRUCTOR_SET_INGREDIENT = 'CONSTRUCTOR_SET_INGREDIENT';
export const CONSTRUCTOR_UPDATE = 'CONSTRUCTOR_UPDATE';
export const CONSTRUCTOR_DELETE_INGREDIENT = 'CONSTRUCTOR_DELETE_INGREDIENT';
export const CONSTRUCTOR_SAVE_ORDER = 'CONSTRUCTOR_SAVE_ORDER';

export const setIngredient = (item) => {
  return {
    type: CONSTRUCTOR_SET_INGREDIENT,
    payload: {
      ...item,
      uniqueId: uuid(),
    }
  };
};
