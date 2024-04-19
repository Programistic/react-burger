import { SET_USER, RESET_USER } from "../actions/user";

const initData = {
  isSuccess: false,
  user: {},
  loggedIn: false,
  isPasswordRecoverRequest: false,
};

export const userReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        isSuccess: true,
        user: action.payload.user,
        loggedIn: action.payload.loggedIn,
        isPasswordRecoverRequest: action.payload.isPasswordRecoverRequest,
      };
    }
    case RESET_USER: {
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};
