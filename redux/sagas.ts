import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPosts, fetchPost } from '../api/index';

function* fetchAllPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put({ type: 'GET_POSTS_SUCCESS', payload: posts });
  } catch (e) {
    yield put({ type: 'GET_POSTS_ERROR', payload: e });
  }
}

function* fetchPostById(action) {
  try {
    const currentPost = yield call(fetchPost, action.payload.id);
    yield put({ type: 'GET_POST_BY_ID_SUCCESS', payload: currentPost });
  } catch (e) {
    yield put({ type: 'GET_POST_BY_ID_ERROR', payload: e });
  }
}

export default function* rootSaga() {
  yield takeEvery('GET_POSTS_REQUEST', fetchAllPosts);
  yield takeEvery('GET_POST_BY_ID_REQUEST', fetchPostById);
}
