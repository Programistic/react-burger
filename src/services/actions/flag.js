export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const RESET_LOGGED_IN = 'RESET_LOGGED_IN';

export const setLoggedIn = () => {
  return {
    type: SET_LOGGED_IN,
  };
};

export const resetLoggedIn = () => {
  return {
    type: RESET_LOGGED_IN,
  };
};