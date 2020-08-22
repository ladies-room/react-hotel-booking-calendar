import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const DayTd = styled.td`
height: 44px;
width: 44px;
// margin: 1px 0px !important;
text-align: center !important;
background: rgb(255, 255, 255);
border: 0px;
padding: 0px;
box-sizing: border-box !important;
text-align: center !important;

`
const InlineSpan = styled.span`
height: 44px;
width: 44px;
margin: 1px 0px !important;
text-align: center !important;
width: 44px;
height: 43px;
background: rgb(255, 255, 255);
// border: 1px lightgray;
// border-color: 5px;
padding: 5px;

border-top-right-radius: 50%;
border-bottom-right-radius: 50%;
border-top-left-radius: 50%;
border-bottom-left-radius: 50%;

box-sizing: border-box !important;
text-align: center !important;
&:hover {
  background-color: lightgray
}
`
class Day extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isBooked: false
    }
    this.pushDates = this.pushDates.bind(this);
    this.setIsBookedState = this.setIsBookedState.bind(this);
    this.addHoverEffect = this.addHoverEffect.bind(this);
    this.removeHoverEffect = this.removeHoverEffect.bind(this);
  }
  pushDates(e) {
    // call this.props.selectDates(e.date)
    event.preventDefault();
    // console.log(e.date._d, typeof e.date._d) // obj
    // Wed Sep 23 2020 00:00:00 GMT-0700 (Pacific Daylight Time)
    this.props.selectDates(e.date._d)
  }
  addHoverEffect(e) {
    e.target.style.background = 'red'
  }
  removeHoverEffect(e) {
    // e.target.style.background =
  }
  setIsBookedState() {
    var today = moment(this.props.day.date._d).format('YYYY-MM-DD');

    for (var i = 0; i < this.props.booked_dates.length; i++) {
      var checkin = moment(this.props.booked_dates[i].check_in)._i;
      var checkout = moment(this.props.booked_dates[i].check_out)._i;
      var booked = moment(today).isBetween(checkin, checkout) // true false

      if (booked === true) {
        return <InlineSpan
          style={{
            'color': 'lightgray',
            'textDecoration': 'line-through',
            'cursor': 'default'
          }}
          key={this.props.day.date.toString()}
        >
          {this.props.day.number}
        </InlineSpan>
      }
    }
    return <InlineSpan
      style={{
        'cursor': 'pointer',
        '&:hover': {
          backgroundColor: 'blue'
        }
        // 'outline': '5px solid gray',
        // 'outlineOffset': '10px'
      }}
      key={this.props.day.date.toString()}
      onClick={() => this.pushDates(this.props.day)}
    // onMouseOver={this.addHoverEffect}
    // onMouseOut={this.removeHoverEffect}
    >
      {this.props.day.number}
    </InlineSpan>
  }
  componentDidMount() {
    this.setIsBookedState();
  }
  render() {
    const { day, day: { date, isCurrentMonth, isToday, number }, selectDates
    } = this.props;

    // if today's month is not in currentMonth, do not show date;
    // if(!this.state.currentMonth.includes(day.date._d.month())) { }
    return (
      <DayTd>
        {this.setIsBookedState()}
      </DayTd>
    );
  }
}

export default Day;