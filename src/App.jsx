// import React, { Component } from 'react';
// import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
// import Statistics from './components/statistics/Statistics';
// import Section from './components/section/Section';
// import Notification from './components/notification/Notification';
  
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (feedback) => {
//         this.setState(prevState => {
//             return {
//               [feedback]: prevState[feedback] + 1,
//             };
//         });
//   }

//   countTotalFeedback = () => {
//       return this.state.good + this.state.neutral + this.state.bad;  
//     };
//   countPositiveFeedbackPercentage = () => {
//       return this.state.good * 100 / this.countTotalFeedback();  
//     };
  
//   render() {
//     const {good,neutral,bad} = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
    
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onClick={this.onLeaveFeedback} />
//         </Section>

//         <Section title="Statistics">
//           {total > 0 ? <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage} /> : <Notification message="There is no feedback"></Notification>}
//         </Section>
//       </div>
//     ); 
//   }
// };

// export default  App;
