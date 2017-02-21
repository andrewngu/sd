import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__inner container">
          <div className="header__logo">
            <img alt="Sysdig Logo" src="/assets/sysdig_white.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
