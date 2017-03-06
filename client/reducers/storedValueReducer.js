import * as types from '../constants/actionTypes';

export default function (state = { storedValue: 0 }, action) {
  switch (action.type) {
    case types.GET_STORED_VALUE:
      return Object.assign({}, state, { storedValue: action.payload });
    default:
      return state;
  }
};
