import moment from 'moment';
import React, { Component, PropTypes } from 'react';

const propTypes = {
  event: PropTypes.object.isRequired,
};

class Event extends Component {
  render() {
    const { description, name, timestamp } = this.props.event;

    return (
      <div className="event">
        <div className="event__header">
          <div className="event__name">
            {name}
          </div>
        </div>
        <div className="event__description">
          {description}
        </div>
        <div className="event__time">
          {moment(timestamp, 'X').fromNow()}
        </div>
      </div>
    );
  }
}

Event.propTypes = propTypes;

export default Event;
