import React from 'react';
// import moment from 'moment';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Calendar from './Calendar.jsx';
import Form from './Form.jsx';
import styled from 'styled-components';
const moment = extendMoment(Moment);
const axios = require('axios')

const AppMainDiv = styled.div`
position: relative !important;
    min-height: 100vh !important;
padding-left: 80px !important;
padding-right: 80px !important;
max-width: 1280px !important;
-webkit-box-pack: start !important;
    -webkit-box-align: stretch !important;
    display: flex !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
    // flex-wrap: wrap !important;
    width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    --page-shell-max-content-width: 1280px;
    color: #222222 !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    --gp-section-compact-padding: 32px !important;
    --gp-section-compact-padding-condensed: 16px !important;
    --gp-section-standard-padding: 48px !important;
    --gp-section-standard-padding-condensed: 24px !important;
`

const CalendarMainDiv = styled.div`
position: relative !important;
    width: 58.3333% !important;
    margin-left: 0% !important;
    margin-right: 0% !important;
`
const FormMainDiv = styled.div`
position: relative !important;
    width: 33.3333% !important;
    margin-left: 8.33333% !important;
    margin-right: 0% !important;
`
const FormSticky = styled.div`
position: sticky !important;
    top: 80px !important;
    z-index: 1 !important;
    padding-right: 1px !important;
`
const FormInnerWithPaddingDiv = styled.div`
border: 1px solid rgb(221, 221, 221);
border-radius: 12px;
padding: 24px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`
const FormInnerDiv = styled.div`
color: rgb(34, 34, 34) !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
`
const CalendarDiv = styled.div`
padding-top: 48px;
padding-bottom: 48px;
`
const CalendarHead = styled.div`
padding-bottom: 0px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment(),
      firstMonth: moment(),
      secondMonth: moment().add(1, 'month'),
      selected: moment().startOf('day'),
      dateRange: [],
      checkin: '',
      checkout: '',
      totalPrice: 0,
      booked_dates: [],
    }
    this.getPreviousMonths = this.getPreviousMonths.bind(this);
    this.getNextMonths = this.getNextMonths.bind(this);
    this.selectDates = this.selectDates.bind(this);
    this.clearDateRange = this.clearDateRange.bind(this);
    this.showDates = this.showDates.bind(this);
    this.setBookingDate = this.setBookingDate.bind(this);
    this.checkPrice = this.checkPrice.bind(this);
    this.getAvailability = this.getAvailability.bind(this);
    this.bookedDates = this.bookedDates.bind(this);
  }
  getPreviousMonths() {
    this.setState({
      firstMonth: this.state.firstMonth.subtract(1, 'month'),
      secondMonth: this.state.secondMonth.subtract(1, 'month')
    })
  }
  getNextMonths() {
    this.setState({
      firstMonth: this.state.firstMonth.add(1, 'month'),
      secondMonth: this.state.secondMonth.add(1, 'month')
    })
  }
  selectDates(date) {
    // if dateRange < 2:
    // METHOD 1:
    // console.log(typeof this.state.dateRange[0])
    // console.log(this.state.dateRange[0])
    if (this.state.dateRange.length < 2) {
      this.setState({
        dateRange: [...this.state.dateRange, date]
      }, this.setBookingDate)
    }
    // METHOD 2: (I broke it!! ASK JORGE!!)
    // if (this.state.dateRange.length < 2) {
    //   this.setState((oldData) => {
    //     return {
    //       oldData.dateRange: [...oldData.dateRange, date],
    //       oldData.checkin: oldData.dateRange[0],
    //       oldData.checkout: oldData.dateRange[1],
    //     }
    //   })
    // }
    // if dateRange > 2:
    if (this.state.dateRange.length === 2 || this.state.dateRange.length > 2) {
      this.clearDateRange()
    }
  }
  setBookingDate() {
    this.setState({
      checkin: this.state.dateRange[0],
      checkout: this.state.dateRange[1],
    })
  }
  clearDateRange() {
    this.setState({
      checkin: undefined,
      checkout: undefined,
      dateRange: []
    })
  }
  showDates() {
    console.log(this.state.dateRange)
  }
  checkPrice(checkin, checkout) {
    // get request to price for dates in this.state.dateRange
    var count = 0;
    var range = moment.range(checkin, checkout);
    var countDays = Array.from(range.by('days')).forEach(n => count++)
    var price = count * 1000;
    console.log(price);
    this.setState({
      totalPrice: price
    })
  }
  getAvailability() {
    // get request to db for date available;
    axios.get('/listing')
      .then((response) => {
        console.log(response.data) // [{}, {}]
        this.setState({
          booked_dates: response.data
        })
        this.bookedDates();
      })
  }
  bookedDates() {
    //
  }
  componentDidMount() {
    this.getAvailability();
  }
  render() {
    return (
      <AppMainDiv>
        {/* CALENDAR DIV BLOCK */}
        < CalendarMainDiv >
          <div>
            <div className='boardertop'></div>
            <CalendarDiv>
              <CalendarHead></CalendarHead>
              <Calendar
                // STATES:
                month={this.state.month}
                firstMonth={this.state.firstMonth}
                secondMonth={this.state.secondMonth}
                checkin={this.state.checkin}
                checkout={this.state.checkout}
                booked_dates={this.state.booked_dates}
                // FUNCTIONS:
                getPreviousMonths={this.getPreviousMonths}
                getNextMonths={this.getNextMonths}
                selectDates={this.selectDates}
              />
            </CalendarDiv>
            <div className='boarderbuttom'></div>
          </div>
        </CalendarMainDiv >


        {/* FORM DIV BLOCK*/}
        < FormMainDiv >
          <FormSticky>
            <FormInnerWithPaddingDiv>
              <FormInnerDiv>
                <Form
                  // STATES:
                  checkin={this.state.checkin}
                  checkout={this.state.checkout}
                  dateRange={this.state.dateRange}
                  totalPrice={this.state.totalPrice}
                  // FUNCTION:
                  checkPrice={this.checkPrice}
                />
              </FormInnerDiv>
            </FormInnerWithPaddingDiv>
          </FormSticky>
        </FormMainDiv >
      </AppMainDiv >
    )
  }
}

export default App;