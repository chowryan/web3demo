import {
  SET_VERSION,
  SET_NODE_STATUS,
  SET_COINBASE,
  SET_MINING_STATUS,
  SET_HASHRATE,
  SET_GAS_PRICE,
  SET_ACCOUNTS,
  SET_BLOCK_NUMBER,
} from './actions'

export const defaultMainState = {
  version: '',
  provider: '',
  nodeStatus: '',
  coinbase: '',
  hashrate: null,
  gasPrice: '',
  accounts: [],
  blockNumber: null,
}

const mainReducer = (state = defaultMainState, { type, payload }) => {
  const extendState = () => ({ ...state, ...payload })
  switch (type) {
    case SET_VERSION:
      return extendState()
    case SET_NODE_STATUS:
      return extendState()
    case SET_MINING_STATUS:
      return extendState()
    case SET_COINBASE:
      return extendState()
    case SET_HASHRATE:
      return extendState()
    case SET_GAS_PRICE:
      return extendState()
    case SET_ACCOUNTS:
      return extendState()
    case SET_BLOCK_NUMBER:
      return extendState()
    default:
      return state
  }
}

export default mainReducer
