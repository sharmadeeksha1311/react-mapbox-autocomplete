import { UPDATE_SELECTED_LOCATION } from './action_types';

export const updateLocation = (locationArgs) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SELECTED_LOCATION,
      data: locationArgs,
    });
  };
};