import initialState from '../store/initialState';
import * as actionTypes from '../actions/actionTypes';

export default function inspectReducer(state = initialState.inspected, action) {
  switch (action.type) {
    case actionTypes.INSPECT_MON: {
      return action.payload || null;
    }

    default:
      return state;
  }
}