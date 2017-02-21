import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchEventsIfNeeded } from '../actions/EventActions';
import Events from '../components/Events';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class EventsContainer extends Component {
  constructor() {
    super();
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { dispatch } = this.props;
      dispatch(fetchEventsIfNeeded());
    }, 30000);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchEventsIfNeeded());
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    return <Events {...this.props} />;
  }
}

EventsContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { events } = state;
  return { events };
}

export default connect(mapStateToProps)(EventsContainer);
