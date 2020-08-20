import React from 'react';
import Week from './Week';
import DayNames from './DayNames';

import moment from 'moment';
import styled from 'styled-components';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      selected: moment().startOf('day')
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1, 'month'),
    });
  }

  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" - 1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
      selected,
      month,
    } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date}
          date={date.clone()}
          month={month}
          select={(day) => this.select(day)}
          selected={selected} />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderThisMonthLabel() {
    const {
      month,
    } = this.state;
    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }
  renderNextMonthLabel() {
    const {
      month,
    } = this.state;
    var nextMonth = month.add(1, 'month')
    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <center>
        <br /><br /><br /><br />
        {/* first calendar */}
        <button className="arrow fa fa-angle-left" onClick={this.previous} />
        <section className="calendar">
          <header className="header">
            <div className="month-display row">
              {this.renderThisMonthLabel()}
            </div>
            <DayNames />
          </header>
          {this.renderWeeks()}
        </section>
        <br /><br /><br /><br />
        {/* second calendar */}
        <section className="calendar">
          <header className="header">
            <div className="month-display row">
              {this.renderNextMonthLabel()}
            </div>
            <DayNames />
          </header>
          {this.renderWeeks()}
        </section>
        <button className="arrow fa fa-angle-right" onClick={this.next} />
      </center>
    );
  }
}

export default Calendar;