import React, { Component, PropTypes } from 'react';

const defaultProps = {
  size: 30,
};

const propTypes = {
  size: PropTypes.number,
};

class Spinner extends Component {
  render() {
    const { size } = this.props;
    return <div className="spinner" style={{ width: `${size}px`, height: `${size}px` }} />;
  }
}

Spinner.defaultProps = defaultProps;
Spinner.propTypes = propTypes;

export default Spinner;
