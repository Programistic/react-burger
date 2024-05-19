export const SET_ERROR = 'SET_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const setError = (item: number) => {
  return {
    type: SET_ERROR,
    payload: item,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};
