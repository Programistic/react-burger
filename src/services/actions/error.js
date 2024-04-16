export const ERROR = 'ERROR';

export const setError = (item) => {
  return {
    type: ERROR,
    payload: item,
  };
};
