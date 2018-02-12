import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper/Paper'
import Typography from 'material-ui/Typography/Typography'

import styles from './Accounts.css'

class Accounts extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {
      coinbase,
      isMining,
      hashrate,
      gasPrice,
      accounts,
      blockNumber,
    } = this.props
    return (
      <Paper className={styles['container']} elevation={4}>
        <Typography variant="title">Accounts</Typography>
        <div>Coinbase: { coinbase }</div>
        <div>Is Mining: { JSON.stringify(isMining) }</div>
        <div>Hashrate: { hashrate }</div>
        <div>Gas Price: { gasPrice }</div>
        <div>Accounts: { accounts }</div>
        <div>Block Number: { blockNumber }</div>
      </Paper>
    )
  }
}

const mapStateToProps = ({
  coinbase,
  isMining,
  hashrate,
  gasPrice,
  accounts,
  blockNumber,
}) => ({
  coinbase,
  isMining,
  hashrate,
  gasPrice,
  accounts,
  blockNumber,
})

export default connect(mapStateToProps)(Accounts)
