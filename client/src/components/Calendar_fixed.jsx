import React from 'react';
import Week from './Week';
import DayNames from './DayNames';
import moment from 'moment';
import styled from 'styled-components';
const axios = require('axios')

class Calendar_FIXED extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMonth: moment(),
      booked_dates: []
    }
    this.getWeeks = this.getWeeks.bind(this)
    this.firstMonthLabel = this.firstMonthLabel.bind(this);
    this.getAvailability = this.getAvailability.bind(this);
  }
  // DEPRECATED:
  firstMonthLabel() {
    var firstMonth = this.props.firstMonth
    return <h3>{firstMonth.format("MMMM YYYY")}</h3>
  }
  getWeeks() {
    // difference between getWeeks & getSecondWeeks is the month;
    // this.props.firstMonth
    var firstSunday = this.state.firstMonth.clone().startOf("month").add("w" - 1).day("Sunday");
    var weeks = [];
    var done = false;
    var count = 0;
    var monthIndex = firstSunday.month();

    // whileloop;
    while (!done) {
      // pushing every first sunday of the week;
      weeks.push(
        <Week
          // PROPS
          key={firstSunday}
          date={firstSunday.clone()}
          month={this.props.month}
          checkin={this.props.checkin}
          checkout={this.props.checkout}
          // STATE
          booked_dates={this.state.booked_dates}
          // FUNCTIONS:
          selectDates={this.props.selectDates}
        />
      );
      firstSunday.add(1, 'w');
      done = count++ > 2 && monthIndex !== firstSunday.month();
      monthIndex = firstSunday.month();
    }
    return weeks;
  }
  getAvailability() {
    // get request to db for date available;
    axios.get('/listing')
      .then((response) => {
        console.log(response.data) // [{}, {}]
        this.setState({
          booked_dates: response.data
        })
      })
  }
  componentDidMount() {
    this.getAvailability();
  }
  render() {
    var firstMonth = <h3>{this.state.firstMonth.format("MMMM YYYY")}</h3>
    return (
      <div>
        <div className='firstMonthDiv'>
          <table>
            <caption>{firstMonth}</caption>
            <thead><DayNames /></thead>
            <tbody>{this.getWeeks()}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Calendar_FIXED;