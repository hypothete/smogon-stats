import initialState from '../store/initialState';
import * as actionTypes from '../actions/actionTypes';

export default function dataReducer(state = initialState.data, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA: {
      const { data } = action.payload;
      const monNames = Object.keys(data);
      return monNames.map(name => {
        return {
          name,
          ...data[name]
        };
      })
      .sort((a, b) => {
        return b.usage - a.usage;
      });
    }
    default:
      return state;
  }
}