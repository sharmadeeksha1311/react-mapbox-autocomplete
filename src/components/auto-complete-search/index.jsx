import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../../actions';
import { mockPlaces } from '../../constants';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutoComplete = () => {
  const searchPlaceRef = useRef(null);
  const dispatch = useDispatch();

  const onPlaceSelected = (event, value) => {
    if (value) {
      const { latitude, longitude } = mockPlaces.find(
        (place) => place.description === value
      );
      dispatch(updateLocation({ latitude, longitude }));
    }
  };

  useEffect(() => {
    if (searchPlaceRef.current) {
      searchPlaceRef.current.addEventListener('change', onPlaceSelected);

      return () => {
        searchPlaceRef.current.removeEventListener(
          'change',
          onPlaceSelected
        );
      };
    }
  }, [dispatch]);

  const clearSearchBox = () => {
    if (searchPlaceRef.current) {
      searchPlaceRef.current.value = '';
    }
  };

  return (
    <Autocomplete
      options={mockPlaces.map((place) => place.description)}
      freeSolo
      onChange={onPlaceSelected}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={searchPlaceRef}
          label="Enter a location"
          variant="outlined"
          onFocus={clearSearchBox}
        />
      )}
    />
  );
};

export default AutoComplete;
