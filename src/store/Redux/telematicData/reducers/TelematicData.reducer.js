import {
    ALL_TELEMATIC_DATA,
    ALL_TELEMATIC_DATA_FAIL,
    ALL_TELEMATIC_DATA_SUCCESS
} from '../actions/TelematicData.actions';

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {

      case ALL_TELEMATIC_DATA:
          return {
              ...state,
              loading: true,
              loaded: false,
              data: null,
              error: null,
          };

      case ALL_TELEMATIC_DATA_SUCCESS:
          return {
              ...state,
              loading: false,
              loaded: true,
              error: null,
              data: action.data
          };

      case ALL_TELEMATIC_DATA_FAIL:
          return {
              ...state,
              loading: false,
              loaded: true,
              data: null,
              error: action.ex
          };

    default:
      return state
  }
}
