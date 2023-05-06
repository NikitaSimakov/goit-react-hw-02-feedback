import React, { Component } from "react";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
  return (<>
    <h1>Please leave feedback</h1>
      <div>
        <button onClick={() => {
          this.setState((prevState) => {
            return {
              value: prevState.value + 1,
            }
          })
          console.log(this.state.good)
          }} type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
      <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {this.state.good}</li>
        <li>Neutral: {this.state.neutral}</li>
        <li>Bad: {this.state.bad}</li>
      </ul>
      </div>
      </>)
  }
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Statistics />
    </div>
  );
};
