import { SET_BAN_TAB, SET_SAUCE_TAB, SET_MAIN_TAB } from "../actions/tab";

const initData = {
  isBunView: true,
  isSauceView: false,
  isMainView: false,
}

export const tabReducer = (state = initData, action) => {
  switch (action.type) {
    case SET_BAN_TAB: {
      return {
        ...state,
        isBunView: action.inView,
      };
    }
    case SET_SAUCE_TAB: {
      return {
        ...state,
        isSauceView: action.inView,
      };
    }
    case SET_MAIN_TAB: {
      return {
        ...state,
        isMainView: action.inView,
      };
    }
    default:
      return state;
  }
};