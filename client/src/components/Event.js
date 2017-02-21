import moment from 'moment';
import React, { Component, PropTypes } from 'react';

const propTypes = {
  event: PropTypes.object.isRequired,
};

class Event extends Component {
  tagClassName() {
    const { severity } = this.props.event;

    if (severity > 6) {
      return 'tag--red';
    } else if (severity > 3) {
      return 'tag--orange';
    }

    return 'tag--green';
  }

  render() {
    const { description, name, severity, timestamp } = this.props.event;

    return (
      <div className="event">
        <div className="event__header">
          <div className="event__name">
            {name}
          </div>
          <div className="event__severity">
            <div className={`tag ${this.tagClassName()}`}>
              {`Severity ${severity}`}
            </div>
          </div>
        </div>
        <div className="event__description">
          {description}
        </div>
        <div className="event__time">
          {`Created ${moment(timestamp, 'X').fromNow()}`}
        </div>
      </div>
    );
  }
}

Event.propTypes = propTypes;

export default Event;
