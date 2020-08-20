import React from 'react';

class DayNames extends React.Component {
  render() {
    return (
      <tr className="row day-names">
        <td className="day">Sun</td>
        <td className="day">Mon</td>
        <td className="day">Tue</td>
        <td className="day">Wed</td>
        <td className="day">Thu</td>
        <td className="day">Fri</td>
        <td className="day">Sat</td>
      </tr>
    );
  }
}


export default DayNames;