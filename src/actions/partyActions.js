import * as actionTypes from './actionTypes';

export function addToParty(mon) {
  return {
    type: actionTypes.ADD_TO_PARTY,
    payload: mon
  }
}

export function removeFromParty(mon) {
  return {
    type: actionTypes.REMOVE_FROM_PARTY,
    payload: mon
  }
}
