import React, { Component } from 'react';
import { connect } from 'react-redux';
import Web3Wrapper from './Web3Wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World!',
    };
  }

  render() {
    return (
      <div>
        { JSON.stringify(!this.props.on) }
      </div>
    );
  }
}

export default Web3Wrapper(connect(({ on }) => ({ on }))(App));

