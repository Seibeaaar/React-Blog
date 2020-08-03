import { WatcherAction } from './types';
// Watcher actions (to call sagas when they are triggered)
export const getPostsRequest = (): WatcherAction => {
  return {
    type: 'GET_POSTS_REQUEST',
  };
};

export const getPostByIdRequest = (id: string): WatcherAction => {
  return {
    type: 'GET_POST_BY_ID_REQUEST',
    payload: id,
  };
};
