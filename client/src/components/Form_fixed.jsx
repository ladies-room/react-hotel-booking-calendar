// CAL2 FORM
import React, { useState, useEffct } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import Calendar from './Calendar'

Modal.setAppElement('#app')

const Formbox = styled.div`
  float: right;
  width: 300px;
  height: 380px;
  // padding-left: 5%;
  // padding-right: 5%;
  box-shadow: 0 0 15px 0 #C0C0C0;
  // border-radius: 16px!important;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  // box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;
const Temp = styled.div`
  float: right
`
const Forms = styled.div`
display: flex;
`
const BtnInput = styled.input`
height: 56px;
width: 100%;
background-color: #fc0377;
size: 16px;
color: white;
`
const Labels = styled.label`
  display: flex;
  justify-content: center;
`
const LabelLeft = styled.input`
  height: 56px;
  width: 100%;
  box-sizing-border-box;
  display: block;
  padding-left: 12px !important;
  padding-right: 12px !important;
  padding-top: 26px !important;
  padding-bottom: 10px !important;
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
  border-color: initial !important;
  border-image: initial !important;
  outline: none !important;
  margin: 0px !important;
  overflow: hidden !important;
  // background-color: transparent !important;
  // border-style: none !important;
`
const LabelRight = styled.input`
height: 56px;
width: 100%;
backgroud-color: pink;
padding-left: 12px !important;
padding-right: 12px !important;
padding-top: 26px !important;
padding-bottom: 10px !important;
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
border-color: initial !important;
border-image: initial !important;
outline: none !important;
margin: 0px !important;
overflow: hidden !important;
`;
const GuestInput = styled.input`
height: 56px;
width: 100%;
backgroud-color: pink;
padding-left: 12px !important;
padding-right: 12px !important;
padding-top: 26px !important;
padding-bottom: 10px !important;
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
border-color: initial !important;
border-image: initial !important;
outline: none !important;
margin: 0px !important;
overflow: hidden !important;
`
const ModalDiv = styled.div`
//
`
class Form_FIXED extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      input: '',
      output: '',
      guests: '',
      showCalendar: false,
      modalIsOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setModalIsOpen = this.setModalIsOpen.bind(this)
  }

  setModalIsOpen() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      showCalendar: false
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(
      'value: ' + this.state.value +
      'input: ' + this.state.input +
      'output ' + this.state.output +
      'guests ' + this.state.guests
    );
    event.preventDefault();
  }

  handleClick(event) {
    console.log('clicked')
    this.setState({
      showCalendar: true
    })
  }
  render() {
    var toggleCalendar;
    if (this.state.showCalendar) {
      toggleCalendar =
        <div>
          <Modal isOpen={true}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 20px',
                borderRadius: '16px!important',
                // backgroundColor: 'red',
              },
              content: {
                width: '800px',
                height: '400px',
                paddingTop: '24px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                paddingRight: '32px',
                backgroudColor: 'yellow',
              }
            }}
          >
            <h2>Modal Calendar</h2>
            <Calendar />
            <button onClick={this.setModalIsOpen} >Close</button>
          </Modal>
        </div >
    }

    return (
      <div>
        <Formbox>
          <h2>$53,272<span>/ month</span></h2>
          <button>Open Modal</button>
          <Forms>
            <form onSubmit={this.handleSubmit}>
              <Labels>
                <div>CHECK-IN
            <LabelLeft
                    type="text"
                    name='input'
                    value={this.state.input}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                  />
                  {toggleCalendar}
                </div>
                <div>CHECKOUT
            <LabelRight
                    type="text"
                    name='output'
                    value={this.state.output}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                  />
                </div>
              </Labels>
              <div>GUESTS
          <GuestInput
                  type="text"
                  name='guests'
                  value={this.state.guests}
                  onChange={this.handleChange}
                />
              </div>
              <BtnInput
                type="submit" value="Check availability" />
            </form>
          </Forms>
        </Formbox>
        <Temp>
          {/* <Calendar /> */}
        </Temp>
      </div>
    );
  }
}

export default Form_FIXED;