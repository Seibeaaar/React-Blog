import { PostsInit } from '../types';

const initialState = {
  posts: [],
  error: null,
};

const postsReducer = (state: PostsInit = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_POSTS_SUCCESS':
      return { ...state, posts: payload };
    case 'GET_POSTS_ERROR':
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default postsReducer;
