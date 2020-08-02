import { GET_POSTS, GET_POST_BY_ID } from './actions/constants';

// Post types
export type CommentItem = {
  id: number,
  postid: number,
  body: string,
};

export type Post = {
  id: number,
  title: string,
  body: string,
  comments: Array<CommentItem>,
};

// Action interfaces
export interface GetPostsAction {
  type: typeof GET_POSTS,
  payload: Array<Post>,
}

export interface GetPostByIdAction {
  type: typeof GET_POST_BY_ID,
  payload: Post,
}

// Posts reducer's initial state
export type PostsInit = {
  posts: Array<Post>,
}

export type CurrentInit = {
  post: Post | object,
}
