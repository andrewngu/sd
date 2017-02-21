import React, { Component, PropTypes } from 'react';
import { fetchEventsIfNeeded } from '../actions/EventActions';
import Event from '../components/Event';
import Spinner from '../components/Spinner';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
};

class Events extends Component {
  constructor() {
    super();
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchEventsIfNeeded());
  }

  render() {
    const { isFetching, items } = this.props.events;

    return (
      <div className="events container">
        <div className="events__header">
          <div className="events__header__text">
            Events
          </div>
          <div className="events__header__actions">
            <a className={`button button--blue ${isFetching ? 'button--disabled' : ''}`} href="#" onClick={this.handleRefresh}>
              {isFetching ? <Spinner size={14} /> : 'Refresh' }
            </a>
          </div>
        </div>
        <div className="events__body">
          {items.map(event => <Event event={event} key={event.id} />)}
        </div>
      </div>
    );
  }
}

Events.propTypes = propTypes;

export default Events;
