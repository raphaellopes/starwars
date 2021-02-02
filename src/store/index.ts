// Vendors
import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Locals
import reducers, { RootStateType } from './ducks';

const sagaMonitor: any = null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares: Middleware<{}, RootStateType>[] = [sagaMiddleware];

const composer = applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

export default store;
