import {
  SET_VERSION, SET_NODE_STATUS,
} from './actions'

export const defaultMainState = {
  version: '',
  provider: '',
  nodeStatus: '',
}

const mainReducer = (state = defaultMainState, { type, payload }) => {
  const extendState = () => ({ ...state, ...payload })
  switch (type) {
    case SET_VERSION:
      return extendState()
    case SET_NODE_STATUS:
      return extendState()
    default:
      return state
  }
}

export default mainReducer
