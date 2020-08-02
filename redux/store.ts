import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(saga),
));

export default store;
