import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import { getWeb3 } from '../redux/main/thunks'

import Connection from './Connection'
import Accounts from './Accounts'
import Transactions from './Transactions'
import Contracts from './Contracts'
import EventsLogs from './EventsLogs'

class App extends Component {
  async componentDidMount() {
    const { dispatch } = this.props
    dispatch(getWeb3())
  }

  renderWeb3Content() {
    return (
      <div>
        <Connection />
        <Accounts />
        <Transactions />
        <Contracts />
        <EventsLogs />
      </div>
    )
  }

  render() {
    return (
      <div>
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Typography variant="title">
              Web3 Demo
            </Typography>
          </Toolbar>
        </AppBar>
        { window.web3 && this.renderWeb3Content() }
      </div>
    )
  }
}

export default connect()(App)

