import { SET_USER, RESET_USER } from "../actions/user";

const initData = {
  isSuccess: false,
  user: {},
  accessToken: '',
  refreshToken: '',
};

export const userReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        isSuccess: true,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    }
    case RESET_USER: {
      return {
        ...state,
        user: null,
        accessToken: '',
        refreshToken: '',
      };
    }
    default:
      return state;
  }
};
