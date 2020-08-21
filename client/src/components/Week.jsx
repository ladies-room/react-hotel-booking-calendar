import React from 'react';
import moment from 'moment';
import Day from './Day'
// import CalendarHeader from './CalendarHeader.jsx';
// import DayNames from './DayNames.jsx';
// const moments = require('../utils/moment-utils');

class Week extends React.Component {
  render() {
    let days = [];
    let { date } = this.props;
    // console.log(date.date())
    const { month, } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };
      days.push(
        <Day
          // STATE & PROPS:
          key={day.number}
          day={day}
          checkin={this.props.checkin}
          checkout={this.props.checkout}
          booked_dates={this.props.booked_dates} // [obj, obj]
          // FUNCTION:
          selectDates={this.props.selectDates}

        // select={select}
        />
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <tr className="row week" key={days[0]}>
        {days}
      </tr>
    );
  }
}


export default Week;