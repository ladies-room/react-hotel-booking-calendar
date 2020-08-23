import React from 'react';
import Week from './Week';
import DayNames from './DayNames';
import moment from 'moment';
// const dayjs = require('dayjs')
// const moment = require('moment');
// import 'moment-timezone';
import styled from 'styled-components';

const CalendarMainDiv = styled.div`
    margin-left: 0px !important;
    margin-right: 0px !important;
    overflow: visible !important;
    display: flex !important;
    height: 100% !important;
    position: relative !important;
    width: 717px;
    text-align: left !important;
    background: rgb(255, 255, 255) !important;
`
const FirstMonthMainDiv = styled.div`
  padding-right:20px;
`

const SecondMonthMaindiv = styled.div`
padding-left:20px;
`

const WeeksTbody = styled.tbody`
display: table-row-group;
vertical-align: middle;
border-color: inherit;
`

const ButtonLeft = styled.button`
appearance: none !important;
    display: inline-block !important;
    color: rgb(34, 34, 34) !important;
    cursor: pointer !important;
    touch-action: manipulation !important;
    position: relative !important;
    border-radius: 50% !important;
    border-width: initial !important;
    // border-style: none !important;
    // border-color: initial !important;
    // border-image: initial !important;
    outline: 0px !important;
    margin: 0px !important;
    padding: 0px !important;
    // background: transparent !important;
    // transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
`
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getWeeks = this.getWeeks.bind(this)
    this.getSecondWeeks = this.getSecondWeeks.bind(this)
    // DEPRECATED FUNCTION:
    this.firstMonthLabel = this.firstMonthLabel.bind(this);
    this.secondMonthLabel = this.secondMonthLabel.bind(this);
  }
  // DEPRECATED:
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
          booked_dates={this.props.booked_dates}
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
          firstMonth={this.props.firstMonth}
          secondMonth={this.props.secondMonth}
          checkin={this.props.checkin}
          checkout={this.props.checkout}
          booked_dates={this.props.booked_dates}
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
  render() {
    // var firstMonthLabel = <h1>{this.props.firstMonth.format('YYYY-MM-DD')}</h1>
    // var secondMonthLabel = <h1>{this.props.secondMonth.format('YYYY-MM-DD')}</h1>
    // var firstMonthLabel = dayjs().format()

    return (
      <CalendarMainDiv>
        <ButtonLeft onClick={this.props.getPreviousMonths}></ButtonLeft>
        {/* <br /><br /> */}
        <FirstMonthMainDiv>
          <div></div>
          <table>
            <caption>{this.firstMonthLabel()}</caption>
            <thead><DayNames /></thead>
            <WeeksTbody>
              {this.getWeeks()}
            </WeeksTbody>
          </table>
        </FirstMonthMainDiv>

        {/* <br /><br /> */}
        <br />
        <SecondMonthMaindiv>
          <table>
            <caption>{this.secondMonthLabel()}</caption>
            <thead><DayNames /></thead>
            <tbody>
              {this.getSecondWeeks()}
            </tbody>
          </table>
        </SecondMonthMaindiv>
        <button onClick={this.props.getNextMonths}></button>
      </CalendarMainDiv>
    )
  }
}

export default Calendar;