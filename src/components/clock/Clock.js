import React from "react";
import { useState } from "react";
import { FormattedDate } from "./FormattedDate";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="Clock">
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
