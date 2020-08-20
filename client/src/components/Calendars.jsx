import React from 'react';
import Week from './Week';
import DayNames from './DayNames';
import Form from './Form';
import moment from 'moment';
import styled from 'styled-components';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.firstMonthLabel = this.firstMonthLabel.bind(this);
    this.secondMonthLabel = this.secondMonthLabel.bind(this);
    this.getWeeks = this.getWeeks.bind(this)
    this.getSecondWeeks = this.getSecondWeeks.bind(this)
  }
  firstMonthLabel() {
    var firstMonth = this.props.firstMonth
    return <h3>{firstMonth.format("MMMM YYYY")}</h3>
  }
  secondMonthLabel() {
    var secondMonth = this.props.secondMonth
    // .add(1, 'month')
    return <h3>{secondMonth.format("MMMM YYYY")}</h3>
  }
  getWeeks() {
    // difference between getWeeks & getSecondWeeks is the month;
    // this.props.firstMonth
    var firstSunday = this.props.firstMonth.clone().startOf("month").add("w" - 1).day("Sunday");
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
          // FUNCTIONS:
          selectDates={this.props.selectDates}
        // STATES:
        // select={(day) => this.select(day)}
        // selected={this.state.selected}
        />
      );
      firstSunday.add(1, 'w');
      done = count++ > 2 && monthIndex !== firstSunday.month();
      monthIndex = firstSunday.month();
    }
    return weeks;
  }
  getSecondWeeks() {
    // difference between getWeeks & getSecondWeeks is the month;
    // this.props.secondMonth
    var firstSunday = this.props.secondMonth.clone().startOf("month").add("w" - 1).day("Sunday");
    var weeks = [];
    var done = false;
    var count = 0;
    var monthIndex = firstSunday.month();

    // whileloop;
    while (!done) {
      // pushing every first sunday of the week;
      weeks.push(
        <Week
          key={firstSunday}
          date={firstSunday.clone()}
          month={this.props.month}
          selectDates={this.props.selectDates}
        // select={(day) => this.select(day)}
        // selected={this.state.selected}
        />
      );
      firstSunday.add(1, 'w');
      done = count++ > 2 && monthIndex !== firstSunday.month();
      monthIndex = firstSunday.month();
    }
    return weeks;
  }
  render() {
    return (
      <center>
        <button onClick={this.props.getPreviousMonths}></button>
        {/* <br /><br /> */}
        <div>
          <table>
            <caption>{this.firstMonthLabel()}</caption>
            <thead><DayNames /></thead>
            <tbody>
              {this.getWeeks()}
            </tbody>
          </table>
        </div>
        {/* <br /><br /> */}
        <div>
          <table>
            <caption>{this.secondMonthLabel()}</caption>
            <thead><DayNames /></thead>
            <tbody>
              {this.getSecondWeeks()}
            </tbody>
          </table>
        </div>
        <br /><br />
        <button onClick={this.props.getNextMonths}></button>
      </center >
    )
  }
}



export default Calendar;