import * as types from '../constants/ActionTypes';
import { EVENTS_URL } from '../constants/ApiConstants';
import { callApi } from '../utils/ApiUtils';

function fetchEvents() {
  return (dispatch) => {
    dispatch(fetchEventsRequest());

    return callApi(EVENTS_URL)
      .then(json => dispatch(fetchEventsSuccess(json)),
            error => dispatch(fetchEventsError(error)));
  };
}

export function fetchEventsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchEvents(getState().events)) {
      return dispatch(fetchEvents());
    }

    return null;
  };
}

function fetchEventsError(error) {
  return {
    type: types.FETCH_EVENTS_ERROR,
    error,
  };
}

function fetchEventsRequest() {
  return {
    type: types.FETCH_EVENTS_REQUEST,
  };
}

function fetchEventsSuccess(json) {
  return {
    type: types.FETCH_EVENTS_SUCCESS,
    items: json.events,
  };
}

function shouldFetchEvents(events) {
  const { isFetching } = events;
  return !isFetching;
}
