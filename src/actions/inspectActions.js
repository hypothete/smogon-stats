import * as actionTypes from './actionTypes';

export function inspectMon(mon) {
  return {
    type: actionTypes.INSPECT_MON,
    payload: mon
  };
}
