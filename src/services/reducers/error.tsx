import { SET_ERROR, RESET_ERROR } from "../actions/error";
import { TAction } from "../../types/action";

const initData = {
  isError: false,
  error: '',
};

export const errorReducer = (state = initData, action: TAction) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state,
        isError: true,
        error: action.payload,
      };
    }
    case RESET_ERROR: {
      return {
        ...state,
        isError: false,
      };
    }
    default:
      return state;
  }
};
