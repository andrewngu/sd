import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchEventsIfNeeded } from '../actions/EventActions';
import Events from '../components/Events';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class EventsContainer extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchEventsIfNeeded());
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
