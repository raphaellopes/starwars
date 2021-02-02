// Vendors
import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Locals
import '~config/reactotron';
import reducers, { RootStateType, rootSagas } from './ducks';

const isDevelopment = process.env.NODE_ENV === 'development';

// @ts-ignore - The console does dot recognizes the tron property
const sagaMonitor = isDevelopment ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares: Middleware<{}, RootStateType>[] = [sagaMiddleware];

const composer = isDevelopment
  ? // @ts-ignore - The console does dot recognizes the tron property
    compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddleware.run(rootSagas);

export default store;
