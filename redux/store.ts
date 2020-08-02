import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(saga),
));

saga.run(rootSaga);

export default store;
