import { setVersion, setNodeStatus } from './actions'
import { web3Promise } from './helpers'


export const getVersion = () => (dispatch) => {
  window.web3.version.getNode((err, res) => {
    if (err) {
      console.error('web3.version.getNode error', err)
    } else {
      dispatch(setVersion(res))
    }
  })
}

export const getPeerCount = () => (dispatch) => {
  window.web3.net.getPeerCount((err, res) => {
    if (err) {
      console.error('web3.net.getPeerCount error', err)
    } else {
      dispatch(setNodeStatus(`Peer Count: ${res}`))
    }
  })
}

export const getNodeStatus = () => (dispatch) => {
  window.web3.net.getListening((err, res) => {
    if (err) {
      console.error('web3.net.getListening error', err)
    } else if (res === false) {
      dispatch(setNodeStatus('Not listening for network connections'))
    } else {
      dispatch(getPeerCount())
    }
  })
}

export const refreshConnection = () => (dispatch) => {
  dispatch(getVersion())
  dispatch(getNodeStatus())
}

export const getWeb3 = () => async (dispatch) => {
  try {
    window.web3 = await web3Promise()
    dispatch(refreshConnection())
  } catch (error) {
    console.error('getWeb3 error', error)
  }
}
