import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPosts, fetchCurrentPost } from '../api/index';

function* fetchAllPosts() {
  try {
    const posts = yield call(fetchPosts);
    // reverse method is used to display latest posts first
    yield put({ type: 'GET_POSTS_SUCCESS', payload: posts.reverse() });
  } catch (e) {
    yield put({ type: 'GET_POSTS_ERROR', payload: e });
  }
}

function* fetchPostById(action) {
  try {
    const currentPost = yield call(fetchCurrentPost, action.payload);
    yield put({ type: 'GET_POST_BY_ID_SUCCESS', payload: currentPost });
  } catch (e) {
    yield put({ type: 'GET_POST_BY_ID_ERROR', payload: e });
  }
}

export default function* rootSaga() {
  yield takeEvery('GET_POSTS_REQUEST', fetchAllPosts);
  yield takeEvery('GET_POST_BY_ID_REQUEST', fetchPostById);
}
