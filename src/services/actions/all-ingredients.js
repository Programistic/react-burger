export const GET_DATA_REQUEST = 'GET_DATA/REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA/SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA/FAILED';
export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';

export const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getDataSuccess = (item) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: [...item],
  };
};

export const getDataFailed = (item) => {
  return {
    type: GET_DATA_FAILED,
    payload: item,
  };
};

export const incCounter = (item) => {
  return {
    type: INC_COUNTER,
    payload: item,
  };
};

export const decCounter = (item) => {
  return {
    type: DEC_COUNTER,
    payload: item,
  };
};
