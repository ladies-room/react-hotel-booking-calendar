import React, { useState, useEffct } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showCalendar: false,
      modalIsOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModalIsOpen = this.setModalIsOpen.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }
  setModalIsOpen() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      showCalendar: false
    })
  }
  handleClick(event) {
    console.log('clicked')
    this.setState({
      showCalendar: true
    })
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.props.checkin} onChange={this.handleChange}
            onClick={this.handleClick}
          />
          {toggleCalendar}
          <input type="text" value={this.props.checkout} onChange={this.handleChange}
            onClick={this.handleClick} />
          {toggleCalendar}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;