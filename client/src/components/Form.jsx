import React, { useState, useEffct } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';

Modal.setAppElement('#app');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      modelIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setModalIsOpen = this.setModalIsOpen.bind(this);
  }
  setModalIsOpen() {
    this.setState({
      isOpen: false
    })
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.checkPrice(this.props.dateRange[0], this.props.dateRange[1])
  }
  handleClick(event) {
    console.log('clicked')
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>total price: {this.props.totalPrice}</h2>
        <label>
          <input
            type="text"
            value={this.props.checkin}
            onChange={this.handleChange}
            // onClick={this.handleClick}
            onClick={() => this.setModalIsOpen(true)}
          />
          {/* <button onClick={() => this.setModalIsOpen(true)}>
            Open Modal
          </button> */}
          < Modal isOpen={this.state.modelIsOpen}>
            <button onClick={this.closeModal}></button>
          </Modal>
          <input
            type="text"
            value={this.props.checkout}
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
        </label>
        <input type="submit" value="Check Price" />
        {/* // count total nights; give price */}
      </form>
    );
  }
}

export default Form;