import React from 'react';
import styled from 'styled-components';

const WeekNamesTr = styled.tr`
padding-left: 0px !important;
    padding-right: 0px !important;
    list-style: none !important;
    // margin: 1px 0px !important;
`
const NameTd = styled.td`
width: 40px;
margin-bottom: 0px !important;
// display: inline-block !important;
text-align: center !important;
font-size: 12px !important;
line-height: 16px !important;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
font-weight: 600 !important;
color: rgb(113, 113, 113) !important;
`

class DayNames extends React.Component {
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


export default DayNames;