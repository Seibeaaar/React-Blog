// eslint-disable-next-line no-unused-vars
import { CurrentInit } from '../types';
import { GET_POST_BY_ID } from '../actions/constants';

const initialState = {
  post: {},
};

const currentPostReducer = (state: CurrentInit = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_BY_ID:
      return { ...state, post: payload };
    default:
      return state;
  }
};

export default currentPostReducer;
