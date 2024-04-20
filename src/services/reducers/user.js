import { SET_USER, RESET_USER } from "../actions/user";

const initData = {
  isSuccess: false,
  user: {},
};

export const userReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        isSuccess: true,
        user: action.payload.user,
      };
    }
    case RESET_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
