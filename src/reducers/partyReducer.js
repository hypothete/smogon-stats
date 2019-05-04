import initialState from '../store/initialState';
import * as actionTypes from '../actions/actionTypes';

export default function partyReducer(state = initialState.party, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_PARTY: {
      if (state.length === 6) {
        return state;
      }
      const foundMon = state.find(mon => mon.name === action.payload.name);
      if (foundMon) {
        return state;
      }
      return [ ...state, action.payload ];
    }

    case actionTypes.REMOVE_FROM_PARTY: {
      return state.filter(mon => mon.name !== action.payload.name);
    }

    default:
      return state;
  }
}