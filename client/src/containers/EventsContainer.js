import React, { Component } from 'react';
import { connect } from 'react-redux';
import Events from '../components/Events';

class EventsContainer extends Component {
  render() {
    return <Events {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { events } = state;
  return { events };
}

export default connect(mapStateToProps)(EventsContainer);
