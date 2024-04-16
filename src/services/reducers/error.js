import { ERROR } from "../actions/error";

const initData = {
  isError: false,
  error: '',
};

export const errorReducer = (state = initData, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        isError: true,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
