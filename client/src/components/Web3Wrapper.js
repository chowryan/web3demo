import React, { Component } from 'react';
import getWeb3 from './helpers';

const Web3Wrapper = PassedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
    };
  }

  async componentDidMount() {
    try {
      const web3 = await getWeb3();
      this.setState({ web3 });
    } catch (error) {
      console.log('Failed to load web3.', error);
    }
  }

  render() {
    const { web3 } = this.state;
    return (
      web3 ? <PassedComponent web3={web3} /> : <div>Loading Web3...</div>
    );
  }
};

export default Web3Wrapper;
