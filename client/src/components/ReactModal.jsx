import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

class Modal extends React.Component {
  render() {
    return (
      <WeekNamesTr>
        {/* <tr> */}
        <NameTd className="day">Su</NameTd>
        <NameTd className="day">Mo</NameTd>
        <NameTd className="day">Tu</NameTd>
        <NameTd className="day">We</NameTd>
        <NameTd className="day">Th</NameTd>
        <NameTd className="day">Fr</NameTd>
        <NameTd className="day">Sa</NameTd>
        {/* </tr> */}
      </WeekNamesTr>
    );
  }
}


export default Modal;