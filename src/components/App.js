import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

class App extends Component {
  render() {
    const { count, changeIncrement, changeDecrement } = this.props;
    return (
      <>
        <button onClick={() => changeIncrement(1)}>Increase</button>
        <h2>{count}</h2>
        <button onClick={() => changeDecrement(1)}>Decrease</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter,
});

const mapDispatchToProps = dispatch => ({
  changeIncrement: value => dispatch(increment(value)),
  changeDecrement: value => dispatch(decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
