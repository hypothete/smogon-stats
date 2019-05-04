import * as actionTypes from './actionTypes';

export function loadData(data) {
  return {
    type: actionTypes.LOAD_DATA,
    payload: data
  };
}