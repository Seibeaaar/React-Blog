// eslint-disable-next-line no-unused-vars
import { CurrentInit } from '../types';

const initialState = {
  post: {},
  error: null,
};

const currentPostReducer = (state: CurrentInit = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_POST_BY_ID_SUCCESS':
      return { ...state, post: payload };
    case 'GET_POST_BY_ID_ERROR':
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default currentPostReducer;
