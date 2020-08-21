import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const DayTd = styled.td`
    height: 44px;
    width: 44px;
    // margin: 1px 0px !important;
    text-align: center !important;
    width: 44px;
    height: 43px;
    background: rgb(255, 255, 255);
    border: 0px;
    // color: rgb(34, 34, 34);
    padding: 0px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    box-sizing: border-box !important;
    cursor: pointer !important;
    text-align: center !important;
    `

class Day extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isBooked: false
    }
    this.pushDates = this.pushDates.bind(this);
    this.setIsBookedState = this.setIsBookedState.bind(this);
  }
  pushDates(e) {
    // call this.props.selectDates(e.date)
    event.preventDefault();
    // console.log(e.date._d, typeof e.date._d) // obj
    // Wed Sep 23 2020 00:00:00 GMT-0700 (Pacific Daylight Time)
    this.props.selectDates(e.date._d)
  }
  setIsBookedState() {
    var today = moment(this.props.day.date._d).format('YYYY-MM-DD');

    for (var i = 0; i < this.props.booked_dates.length; i++) {
      var checkin = moment(this.props.booked_dates[i].check_in)._i; //
      var checkout = moment(this.props.booked_dates[i].check_out)._i;
      var booked = moment(today).isBetween(checkin, checkout) // true false

      if (booked === true) {
        // console.log(today, booked)
        return <DayTd style={{ 'color': 'lightgray' }}>{this.props.day.number}</DayTd>
      } else {
        // return <DayTd>{this.props.day.number}</DayTd>
      }

      // if (!booked) {
      //   // return <span>haha</span>
      //   return <DayTd>{this.props.day.number}</DayTd>
      // }
    }
  }
  componentDidMount() {
    this.setIsBookedState();
  }
  render() {
    const { day, day: { date, isCurrentMonth, isToday, number }, selectDates
    } = this.props;

    // var today = moment(day.date._d).format('YYYY-MM-DD');
    // for (var i = 0; i < this.props.booked_dates.length; i++) {
    //   var checkin = moment(this.props.booked_dates[i].check_in)._i;
    //   var checkout = moment(this.props.booked_dates[i].check_out)._i;
    //   var booked = moment(today).isBetween(checkin, checkout) // true false
    //   // console.log(today)
    // }
    // console.log(today, booked) // true;
    return (
      // <td>
      //   {showdays}
      // </td>
      // <DayTd
      //   key={date.toString()}
      //   onClick={() => this.pushDates(day)}
      //   style={{
      //     // 'textDecoration': `${booked}` ? 'line-through' : 'none',
      //     // 'color': 'lightgray'
      //   }}
      // >
      <td>
        {this.setIsBookedState()}
      </td>
      // </DayTd >
    );
  }
}


export default Day;