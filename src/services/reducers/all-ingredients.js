import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../actions/all-ingredients";

const initialState = {
  success: false,
  isLoading: false,
  isError: false,
  data: [],
  bun: [],
  ingredients: [],
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.data,
        bun: action.data.filter(item => (item.type === 'bun')),
        ingredients: action.data.filter(item => (item.type !== 'bun')),
        success: true,
        isLoading: false,
      };
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        isError: true,
        success: false,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
