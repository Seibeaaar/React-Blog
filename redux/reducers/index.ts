import { combineReducers } from 'redux';
import postsReducer from './posts';
import currentPostReducer from './currentPost';

const rootReducer = combineReducers({
  posts: postsReducer,
  current: currentPostReducer,
});

export default rootReducer;
