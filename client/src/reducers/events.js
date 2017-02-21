import * as types from '../constants/ActionTypes';

const initalState = {
  error: null,
  isFetching: false,
  items: [],
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_ERROR:
      return { ...state, error: action.error, isFetching: false };

    case FETCH_EVENTS_REQUEST:
      return { ...state, error: null, isFetching: true };

    case FETCH_EVENTS_SUCCESS:
      return { ...state, isFetching: false, items: action.items };

    default:
      return state;
  }
}
