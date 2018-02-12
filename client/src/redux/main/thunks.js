import {
  setVersion,
  setNodeStatus,
  setCoinbase,
  setMiningStatus,
  setHashrate,
  setGasPrice,
  setAccounts,
  setBlockNumber,
} from './actions'
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

export const getCoinbase = () => (dispatch) => {
  window.web3.eth.getCoinbase((err, res) => {
    if (err) {
      console.error('web3.eth.getCoinbase error', err)
    } else {
      dispatch(setCoinbase(res))
    }
  })
}

export const getMiningStatus = () => (dispatch) => {
  window.web3.eth.getMining((err, res) => {
    if (err) {
      console.error('web3.eth.getMining error', err)
    } else {
      dispatch(setMiningStatus(res))
    }
  })
}

export const getHashrate = () => (dispatch) => {
  window.web3.eth.getHashrate((err, res) => {
    if (err) {
      console.error('web3.eth.getHashrate error', err)
    } else {
      dispatch(setHashrate(res))
    }
  })
}

export const getGasPrice = () => (dispatch) => {
  window.web3.eth.getGasPrice((err, res) => {
    if (err) {
      console.error('web3.eth.getGasPrice error', err)
    } else {
      dispatch(setGasPrice(res.toString(10)))
    }
  })
}

export const getAccounts = () => (dispatch) => {
  window.web3.eth.getAccounts((err, res) => {
    if (err) {
      console.error('web3.eth.getAccounts error', err)
    } else {
      dispatch(setAccounts(res))
    }
  })
}

export const getBlockNumber = () => (dispatch) => {
  window.web3.eth.getBlockNumber((err, res) => {
    if (err) {
      console.error('web3.eth.getBlockNumber error', err)
    } else {
      dispatch(setBlockNumber(res))
    }
  })
}

export const refreshConnection = () => (dispatch) => {
  dispatch(getVersion())
  dispatch(getNodeStatus())
  dispatch(getCoinbase())
  dispatch(getMiningStatus())
  dispatch(getHashrate())
  dispatch(getGasPrice())
  dispatch(getAccounts())
  dispatch(getBlockNumber())
}

export const getWeb3 = () => async (dispatch) => {
  try {
    window.web3 = await web3Promise()
    dispatch(refreshConnection())
  } catch (error) {
    console.error('getWeb3 error', error)
  }
}
