import React, { Component } from 'react';

export default class feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  persentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please rate our service!</h2>
        <button type="button" name="good" onClick={this.onHandleClick}>
          good
        </button>
        <button type="button" name="neutral" onClick={this.onHandleClick}>
          neutral
        </button>
        <button type="button" name="bad" onClick={this.onHandleClick}>
          bad
        </button>
        <h2>Statistics</h2>
        {this.total() === 0 ? (
          <h2>No feedback given :(</h2>
        ) : (
          <>
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {this.total()}</li>
              <li>Good ratio: {this.persentage() ? this.persentage() : 0} %</li>
            </ul>
          </>
        )}
      </>
    );
  }
}
