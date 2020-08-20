import React from 'react';
import moment from 'moment';
import Calendars from './Calendars.jsx';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <div>
        <Calendars />
      </div>
    )
  }
}

export default App;