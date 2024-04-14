import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  INC_COUNTER,
  DEC_COUNTER,
} from "../actions/all-ingredients";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  data: [],
  bun: [],
  ingredients: [],
  error: '',
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
        data: action.payload,
        bun: action.payload.filter(item => (item.type === 'bun')).forEach(item => {item.count = 0}),
        ingredients: action.payload.filter(item => (item.type !== 'bun')).forEach(item => {item.count = 0}),
        isSuccess: true,
        isLoading: false,
      };
    }
    case GET_DATA_FAILED: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        error: action.payload,
      };
    }
    case INC_COUNTER: {
      const ingId = action.payload._id;
      const isBun = action.payload.type === 'bun';
      isBun && state.data.filter(item => (item.type === 'bun')).forEach(item => {item.count = 0})
      state.data.map((item) => {
        if (isBun && (item._id === ingId)) {
          state.data = [...state.data, item.count = 2];
        }
        if (!isBun && (item._id === ingId)) {
          state.data = [...state.data, item.count = item.count + 1];
        }
        return 0;
      }) 
      return {
        ...state,
      };
    }
    case DEC_COUNTER: {
      const ingId = action.payload._id;
      state.data.map((item) => { 
        if (item._id === ingId) {
          state.data = [...state.data, item.count = item.count - 1];
        }
        return 0;
      })
      
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
