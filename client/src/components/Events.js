import React, { Component, PropTypes } from 'react';
import Event from '../components/Event';

const propTypes = {
  events: PropTypes.object.isRequired,
};

class Events extends Component {
  render() {
    const { items } = this.props.events;

    return (
      <div className="events container">
        <div className="events__header">
          <div className="events__header__text">
            Events
          </div>
          <div className="events__header__actions">
            <a className="button button--blue" href="#">
              Refresh
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
