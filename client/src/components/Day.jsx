import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

class Day extends React.Component {
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number
      },
      select,
      selected
    } = this.props;

    return (
      <span
        key={date.toString()}
        className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
        onClick={() => select(day)}>{number}</span>
    );
  }
}


export default Day;