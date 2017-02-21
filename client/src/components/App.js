import React, { Component } from 'react';
import Header from '../components/Header';
import EventsContainer from '../containers/EventsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <EventsContainer />
      </div>
    );
  }
}

export default App;
