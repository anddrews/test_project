import { SET_USER } from '../actionTypes/actionTypes';

export const userReducer = (state = { userName: 'Anddrews' }, action) => {
  switch (action.type) {
    case SET_USER: {
      return Object.assign({}, state, { userName: action.payload });
    }
    default: {
      return state;
    }
  }
};
