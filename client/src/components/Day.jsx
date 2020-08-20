import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

class Day extends React.Component {
  constructor(props) {
    super(props)
    this.pushDates = this.pushDates.bind(this);
  }
  pushDates(e) {
    // call this.props.selectDates(e.date)
    event.preventDefault();
    this.props.selectDates(e.date._d)
  }
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number
      },
      selectDates, checkin, checkout
    } = this.props;


    return (
      <td
        key={date.toString()}
        // onClick={() => select(day)}
        onClick={() => this.pushDates(day)}
      >
        {number}
      </td>
    );
  }
}


export default Day;