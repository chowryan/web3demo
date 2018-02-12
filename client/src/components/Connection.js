import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button/Button'
import Paper from 'material-ui/Paper/Paper'
import TextField from 'material-ui/TextField/TextField'

import { getWeb3Provider } from '../redux/main/helpers'
import { refreshConnection, getNodeStatus } from '../redux/main/thunks'
import Typography from 'material-ui/Typography/Typography';

// const styles = {
//   container: 
// }
class Connection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      providerInput: props.providerInput,
      isErrorProvider: false,
    }
  }

  componentWillReceiveProps({ provider, nodeStatus }) {
    if (provider !== this.props.provider) {
      this.setState({ providerInput: provider })
    }
  }

  handleChangeTextField = name => e => {
    this.setState({ [name]: e.target.value })
  }

  handleClickConnect = () => {
    const { providerInput } = this.state
    const { dispatch } = this.props
    const newWeb3 = getWeb3Provider(providerInput)
    if (newWeb3.isConnected()) {
      window.web3 = newWeb3
      dispatch(refreshConnection())
      this.setState({ isErrorProvider: false })
    } else {
      this.setState({ isErrorProvider: true })
      console.error('Failed to load provider')
    }
  }

  handleClickNodeStatus = () => {
    const { dispatch } = this.props
    dispatch(getNodeStatus())
  }

  render() {
    const { providerInput, isErrorProvider } = this.state
    const { version, nodeStatus } = this.props
    return (
      <Paper elevation={4}>
        <Typography variant="title">Connection</Typography>
        <div>{ window.web3.isConnected() ? 'Connected' : 'Disconnected' }</div>
        <div>
          Current Provider: 
          { window.web3.currentProvider.isMetaMask ? 'Metamask' : 'Geth' }
        </div>
        <TextField
          label="Provider"
          value={providerInput}
          onChange={this.handleChangeTextField('providerInput')}
          error={isErrorProvider}
        />
        <Button variant="raised" onClick={this.handleClickConnect}>
          Connect
        </Button>
        <div>Version: { version }</div>
        <Button variant="raised" onClick={this.handleClickNodeStatus}>
          Node Status
        </Button>
        <div>Node Status: { nodeStatus }</div>
      </Paper>
    )
  }
}

const mapStateToProps = ({ provider, version, nodeStatus }) => ({
  provider,
  version,
  nodeStatus,
})

export default connect(mapStateToProps)(Connection)
