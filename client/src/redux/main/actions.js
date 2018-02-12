export const SET_VERSION = 'SET_VERSION'
export const SET_NODE_STATUS = 'SET_NODE_STATUS'

export const setVersion = version => ({
  type: SET_VERSION,
  payload: { version },
})

export const setNodeStatus = nodeStatus => ({
  type: SET_NODE_STATUS,
  payload: { nodeStatus },
})
