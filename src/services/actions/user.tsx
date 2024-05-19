import { TUser } from "../../types/user";

export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

export const setUser = (item: TUser) => {
  return {
    type: SET_USER,
    payload: item,
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};
