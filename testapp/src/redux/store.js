import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducer from './reducer';
import {saga} from './saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(Reducer, {}, enhancer);
sagaMiddleware.run(saga);

export { store };