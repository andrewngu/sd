import { combineReducers } from 'redux';
import events from '../reducers/events';

const rootReducer = combineReducers({
  events,
});

export default rootReducer;
