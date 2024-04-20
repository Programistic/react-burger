import { SET_LOGGED_IN, RESET_LOGGED_IN } from "../actions/flag";

const initData = {
  loggedIn: false,
};

export const flagReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_LOGGED_IN: {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case RESET_LOGGED_IN: {
      return {
        ...state,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};
