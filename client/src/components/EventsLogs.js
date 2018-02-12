import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper/Paper'
import Typography from 'material-ui/Typography/Typography'

class EventsLogs extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Paper elevation={4}>
        <Typography variant="title">Events & logs</Typography>
      </Paper>
    )
  }
}

const mapStateToProps = ({ provider, version, nodeStatus }) => ({
  provider,
  version,
  nodeStatus,
})

export default connect(mapStateToProps)(EventsLogs)
