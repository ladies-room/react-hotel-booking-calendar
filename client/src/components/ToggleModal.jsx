import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
// import Calendar from './Calendar.jsx';
// import DayNames from './DayNames.jsx';
// import Week from './Week.jsx';
// import Day from './Day.jsx';

const ModalMainDiv = styled.div`
box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px !important;
    display: inline-block !important;
    padding-top: 24px !important;
    padding-bottom: 16px !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
    position: absolute !important;
    top: -24px !important;
    right: -32px !important;
    width: 661px !important;
    z-index: 1 !important;
    min-height: 460px !important;
    background: rgb(255, 255, 255) !important;
    border-radius: 16px !important;
`

class ToggleModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.props.setModalIsOpen()
  }

  render() {
    return (
      <ModalMainDiv>
        <h2>ToggleModal</h2>
        {/* <Calendar /> */}
        <h3>Alexander</h3>
        <button onClick={this.closeModal}>Close Modal</button>
      </ModalMainDiv>
    )
  }
}


export default ToggleModal;