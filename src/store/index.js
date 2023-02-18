import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import updateLocationnReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  updateLocationnReducer,
  applyMiddleware(...middleware)
);

export default store;