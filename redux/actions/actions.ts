// eslint-disable-next-line no-unused-vars
import { GetPostsAction, GetPostByIdAction } from '../types';
import { GET_POSTS, GET_POST_BY_ID } from './constants';

export const getPosts = (posts): GetPostsAction => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};

export const getPostById = (post): GetPostByIdAction => {
  return {
    type: GET_POST_BY_ID,
    payload: post,
  };
};
