import { SET_USER } from '../actionTypes/actionTypes';

export const setUser = userName => (
  {
    type: SET_USER,
    payload: userName,
  }
);