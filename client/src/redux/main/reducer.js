import { SELECT_ACTION } from './actions';

export const defaultMainState = {
  on: false,
};

const mainReducer = (state = defaultMainState, { type, payload }) => {
  switch (type) {
    case SELECT_ACTION:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
