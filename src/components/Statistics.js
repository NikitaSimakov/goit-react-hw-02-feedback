import React, { Component } from 'react';
import Buttons from './Buttons';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleUpdateGood = () => {
    console.log(this.state);
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleUpdateNeutral = () => {
    console.log(this.state);
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleUpdateBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <Buttons
          handleUpdateGood={this.handleUpdateGood}
          handleUpdateNeutral={this.handleUpdateNeutral}
          handleUpdateBad={this.handleUpdateBad}
        />
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.state.total}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Statistics;
