import * as types from '../constants/ActionTypes';

const initialState = {
  error: null,
  isFetching: false,
  items: [],
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_EVENTS_ERROR:
      return { ...state, error: action.error, isFetching: false };

    case types.FETCH_EVENTS_REQUEST:
      return { ...state, error: null, isFetching: true };

    case types.FETCH_EVENTS_SUCCESS:
      return { ...state, isFetching: false, items: action.items };

    default:
      return state;
  }
}
