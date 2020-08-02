// eslint-disable-next-line no-unused-vars
import { PostsInit } from '../types';
import { GET_POSTS } from '../actions/constants';

const initialState = {
  posts: [],
};

const postsReducer = (state: PostsInit = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export default postsReducer;
