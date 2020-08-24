import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const InputTopLeftDiv = styled.div`
position: relative !important;
    width: 100% !important;
    flex: 1 1 0% !important;
    padding: 0px !important;
    overflow: hidden !important;
`
const InputTopDiv = styled.div`
position: relative !important;
    display: flex !important;
    width: 100% !important;
    color: rgb(34, 34, 34) !important;
    background-color: transparent !important;
    box-shadow: none !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 400 !important;
    margin: 0px !important;
    border-width: initial !important;
    border-style: none !important;
    border-image: initial !important;
    border-radius: 0px !important;
    outline: 0px !important;
    border-color: transparent !important;
`
const Text = styled.div`
position: absolute !important;
    top: 12px !important;
    left: 12px !important;
    right: 12px !important;
    pointer-events: none !important;
    font-size: 10px !important;
    line-height: 12px !important;
    color: rgb(34, 34, 34) !important;
    text-transform: uppercase !important;
    font-weight: 800 !important;
    max-width: 100% !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    margin: 0px !important;
    padding: 0px !important;
    overflow: hidden !important;
`
const DateInput = styled.input`
height: 56px !important;
    width: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 26px !important;
    padding-bottom: 10px !important;
    background-color: transparent !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    cursor: pointer !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    color: rgb(113, 113, 113) !important;
    border-width: initial !important;
    // border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: none !important;
    margin: 0px !important;
    overflow: hidden !important;
    box-sizing: border-box;
`
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }
  render() {
    return (
      <InputTopDiv>
        <InputTopLeftDiv>
          <Text>CHECK-IN</Text>
          <DateInput
            type="text"
            placeholder='Add date'
            value={this.props.checkin}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
        </InputTopLeftDiv>
        {/* RIGHT CHECKOUT DIV */}
        <InputTopLeftDiv>
          <Text>CHECKOUT</Text>
          <DateInput
            type="text"
            placeholder='Add date'
            value={this.props.checkout}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
        </InputTopLeftDiv>
      </InputTopDiv>
    )
  }
}


export default DatePicker;