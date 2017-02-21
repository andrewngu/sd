import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';


class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AppContainer);
