import React from 'react';
import Week from './Week';
import DayNames from './DayNames';
import moment from 'moment';
// const dayjs = require('dayjs')
// const moment = require('moment');
// import 'moment-timezone';
import styled from 'styled-components';
const axios = require('axios')

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
    this.state = {
      // firstMonth: moment(),
      // secondMonth: moment().add(1, 'month'),
      booked_dates: [],
      // TRANFORED FROM APP
      firstMonth: moment(),
      secondMonth: moment().add(1, 'month'),
      checkin: '',
      checkout: ''
    }
    this.getWeeks = this.getWeeks.bind(this)
    this.getSecondWeeks = this.getSecondWeeks.bind(this)
    this.getAvailability = this.getAvailability.bind(this);
    this.firstMonthLabel = this.firstMonthLabel.bind(this);
    this.secondMonthLabel = this.secondMonthLabel.bind(this);
    // TRANSFORED FROM APP:
    this.getPreviousMonths = this.getPreviousMonths.bind(this);
    this.getNextMonths = this.getNextMonths.bind(this);
  }
  firstMonthLabel() {
    var firstMonth = this.state.firstMonth
    return <h3>{firstMonth.format("MMMM YYYY")}</h3>
  }
  secondMonthLabel() {
    var secondMonth = this.state.secondMonth
    return <h3>{secondMonth.format("MMMM YYYY")}</h3>
  }
  // TRANSFORED FROM APP:
  getPreviousMonths() {
    this.setState({
      firstMonth: this.state.firstMonth.subtract(1, 'month'),
      secondMonth: this.state.secondMonth.subtract(1, 'month')
    })
  }
  // TRANSFORED FROM APP:
  getNextMonths() {
    this.setState({
      firstMonth: this.state.firstMonth.add(1, 'month'),
      secondMonth: this.state.secondMonth.add(1, 'month')
    })
  }
  getWeeks() {
    // difference between getWeeks & getSecondWeeks is the month;
    // this.props.firstMonth
    let firstSunday = this.state.firstMonth.clone().startOf("month").add("w" - 1).day("Sunday");
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
  getSecondWeeks() {
    // difference between getWeeks & getSecondWeeks is the month;
    // this.props.secondMonth
    var firstSunday = this.state.secondMonth.clone().startOf("month").add("w" - 1).day("Sunday");
    var weeks = [];
    var done = false;
    var count = 0;
    var monthIndex = firstSunday.month();

    // whileloop;
    while (!done) {
      // pushing every first sunday of the week;
      weeks.push(
        <Week
          // PROPS:
          key={firstSunday}
          date={firstSunday.clone()}
          month={this.props.month}
          checkin={this.props.checkin}
          checkout={this.props.checkout}
          // STATEE:
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
    return (
      <CalendarMainDiv>
        <FirstMonthMainDiv>
          {/* <ButtonLeft /></ButtonLeft> */}
          <button onClick={this.getPreviousMonths}>last month</button>
          <table>
            <caption style={{ fontSize: '16px' }}>{this.firstMonthLabel()}</caption>
            <thead><DayNames /></thead>
            <WeeksTbody>
              {this.getWeeks()}
            </WeeksTbody>
          </table>
        </FirstMonthMainDiv>

        <SecondMonthMaindiv>
          <button onClick={this.getNextMonths}>next month</button>
          <table>
            <caption>{this.secondMonthLabel()}</caption>
            <thead><DayNames /></thead>
            <tbody>
              {this.getSecondWeeks()}
            </tbody>
          </table>
          {/* <ButtonLeft onClick={this.getNextMonths}></ButtonLeft> */}
        </SecondMonthMaindiv>
      </CalendarMainDiv>
    )
  }
}

export default Calendar;