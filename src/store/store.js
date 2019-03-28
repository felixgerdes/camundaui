import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

console.log(store.getState());

export default store;