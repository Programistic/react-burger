export const CURRENT_INGREDIENT_SET = 'CURRENT_INGREDIENT/SET';

export const setCurrentIngredient = (item) => {
  return {
    type: CURRENT_INGREDIENT_SET,
    payload: {
      ...item,
    }
  };
};

export const resetCurrentIngredient = () => {
  return {
    type: CURRENT_INGREDIENT_SET,
    payload: null,
  };
};
