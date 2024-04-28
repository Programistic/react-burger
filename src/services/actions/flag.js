export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const RESET_LOGGED_IN = 'RESET_LOGGED_IN';
export const SET_IS_PASSWORD_RESET_REQUEST = 'SET_IS_PASSWORD_RESET_REQUEST';
export const RESET_IS_PASSWORD_RESET_REQUEST = 'RESET_IS_PASSWORD_RESET_REQUEST';

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

export const setIsPasswordResetRequest = () => {
  return {
    type: SET_IS_PASSWORD_RESET_REQUEST,
  };
};

export const resetIsPasswordResetRequest = () => {
  return {
    type: RESET_IS_PASSWORD_RESET_REQUEST,
  };
};
