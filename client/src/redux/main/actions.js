export const SET_VERSION = 'SET_VERSION'
export const SET_NODE_STATUS = 'SET_NODE_STATUS'
export const SET_COINBASE = 'SET_COINBASE'
export const SET_MINING_STATUS = 'SET_MINING_STATUS'
export const SET_HASHRATE = 'SET_HASHRATE'
export const SET_GAS_PRICE = 'SET_GAS_PRICE'
export const SET_ACCOUNTS = 'SET_ACCOUNTS'
export const SET_BLOCK_NUMBER = 'SET_BLOCK_NUMBER'

export const setVersion = version => ({
  type: SET_VERSION,
  payload: { version },
})

export const setNodeStatus = nodeStatus => ({
  type: SET_NODE_STATUS,
  payload: { nodeStatus },
})

export const setCoinbase = coinbase => ({
  type: SET_COINBASE,
  payload: { coinbase },
})

export const setMiningStatus = isMining => ({
  type: SET_MINING_STATUS,
  payload: { isMining },
})

export const setHashrate = hashrate => ({
  type: SET_HASHRATE,
  payload: { hashrate },
})

export const setGasPrice = gasPrice => ({
  type: SET_GAS_PRICE,
  payload: { gasPrice },
})

export const setAccounts = accounts => ({
  type: SET_ACCOUNTS,
  payload: { accounts },
})

export const setBlockNumber = blockNumber => ({
  type: SET_BLOCK_NUMBER,
  payload: { blockNumber },
})
