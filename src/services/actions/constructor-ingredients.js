import uuid from "react-uuid";

export const CONSTRUCTOR_ADD_BUN = 'CONSTRUCTOR/ADD_BUN';
export const CONSTRUCTOR_ADD_INGREDIENT = 'CONSTRUCTOR/ADD_INGREDIENT';
export const CONSTRUCTOR_UPDATE = 'CONSTRUCTOR/UPDATE';
export const CONSTRUCTOR_DELETE_INGREDIENT = 'CONSTRUCTOR/DELETE_INGREDIENT';
export const CONSTRUCTOR_SAVE_ORDER = 'CONSTRUCTOR/SAVE_ORDER';
export const CONSTRUCTOR_DELETE_ORDER = 'CONSTRUCTOR/DELETE_ORDER';

export const addIngredient = (item) => {
  return {
    type: CONSTRUCTOR_ADD_INGREDIENT,
    payload: {
      ...item,
      uniqueId: uuid(),
    }
  };
};

export const addBun = (item) => {
  return {
    type: CONSTRUCTOR_ADD_BUN,
    payload: {
      ...item,
    }
  };
};

export const updateConstructor = (item) => {
  return {
    type: CONSTRUCTOR_UPDATE,
    payload: 
      [...item],
  };
};

export const deleteIngredient = (item) => {
  return {
    type: CONSTRUCTOR_DELETE_INGREDIENT,
    payload: item,
  };
};

export const saveOrder = (item) => {
  return {
    type: CONSTRUCTOR_SAVE_ORDER,
    payload: 
      [...item],
  };
};

export const deleteOrder = (item) => {
  return {
    type: CONSTRUCTOR_DELETE_ORDER,
  };
};

