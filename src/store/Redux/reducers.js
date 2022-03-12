// react library imports
import { combineReducers } from 'redux';
import telematicReducer from './telematicData/reducers/TelematicData.reducer'

const rootReducer = combineReducers(
  {
      telematicReducer
  }
);

export default rootReducer;
