import {
  UPDATE_SELECTED_LOCATION
} from '../actions/action_types';

const initialState = {
  locationArgs: {
    latitude: 50,
    longitude: 22,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_LOCATION:
      return {
        ...state,
        locationArgs: action.data
      };
    default:
      return state;
  }
};

export default reducer;