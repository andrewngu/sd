import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class AppContainer extends Component {
  render() {
    return (
      <div>hi</div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AppContainer);
