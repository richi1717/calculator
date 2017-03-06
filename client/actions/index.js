import * as types from '../constants/actionTypes';

export function setStoredValue (value) {
  return {
    type: types.GET_STORED_VALUE,
    payload: value
  };
}
