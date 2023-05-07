import React, {Component} from "react";

import Section from "./Section";
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';


export class App extends Component {
  static defaultProps = {
    feedbackTypes: ['good', 'neutral', 'bad'],
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil(((this.state.good  * 100/ this.countTotalFeedback()))) || 0
  }

 render () { 
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: "40px",
      }}
    >
      <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.props.feedbackTypes}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
       <Section title={"Statistics"}>
       {this.countTotalFeedback() ? (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>) : (<p>No feedback given</p>)}
       </Section> 
        
      
    </div>
  );}
};
