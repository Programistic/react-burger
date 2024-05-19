import {
  SET_LOGGED_IN,
  RESET_LOGGED_IN,
  SET_IS_PASSWORD_RESET_REQUEST,
  RESET_IS_PASSWORD_RESET_REQUEST,
} from "../actions/flag";
import { TAction } from "../../types/action";

const initData = {
  loggedIn: false,
  isPasswordResetRequest: false,
};

export const flagReducer = (state = initData, action: TAction) => {
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
    case SET_IS_PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        isPasswordResetRequest: true,
      };
    }
    case RESET_IS_PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        isPasswordResetRequest: false,
      };
    }
    default:
      return state;
  }
};
