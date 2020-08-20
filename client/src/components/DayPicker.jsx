import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const moments = require('../utils/moment-utils');
const dates = require('../utils/date-utils');

class DateIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
    this.changeDate = this.changeDate.bind(this);
  }

  changeDate(e) {
    this.props.setSelectDate(e.target.getAttribute('data-date'));
  }
  // datesInMonth: dates.getDatesInMonthDisplay(
  //   moments.getMonth(this.props.selectDate) + 1,
  //   moments.getYear(this.props.selectDate)
  // );

  // const monthDates = this.datesInMonth.map((i, key) => {
  //   return (
  //     <div
  //       data-active-month={i.currentMonth}
  //       date-date={i.date.toString()}
  //       onClick={this.changeDate}
  //     >
  //       {moments.getDayOfMonth(i.date)}
  //     </div>
  //   )
  // })

  render() {
    var datesInMonth = dates.getDatesInMonthDisplay(
      moments.getMonth(this.props.selectDate) + 1,
      moments.getYear(this.props.selectDate)
    );
    var monthDates = datesInMonth.map((i, key) => {
      return (
        <div
          data-active-month={i.currentMonth}
          date-date={i.date.toString()}
          onClick={this.changeDate}
        >
          {moments.getDayOfMonth(i.date)}
        </div>
      )
    })
    return (
      <div>
        <div className="bae-date-indicator">
          {monthDates}
        </div>
      </div>
    )
  }
}


export default DateIndicator;