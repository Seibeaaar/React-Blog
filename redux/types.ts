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

export interface WatcherAction {
  type: string,
  payload?: number,
}

// Posts reducer's initial state
export type PostsInit = {
  posts: Array<Post>,
}

export type CurrentInit = {
  post: Post | object,
}
