import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import partyReducer from './partyReducer';
import inspectReducer from './inspectReducer';

export default combineReducers ({
  data: dataReducer,
  party: partyReducer,
  inspected: inspectReducer
});