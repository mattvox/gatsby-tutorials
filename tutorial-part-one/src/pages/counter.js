import React from 'react';

class Counter extends React.Component {
  state = { count: 0 }

  plus() {
    this.setState({ count: this.state.count + 1})
  }

  minus() {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.plus()}>plus</button>
        <button onClick={() => this.minus()}>minus</button>
      </div>
    )
  }
}

export default Counter;
