// Vendors
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Locals
import { charactersReducer, charactersSagasWatcher } from './characters';

const rootReducer = combineReducers({ characters: charactersReducer });

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

export function* rootSagas() {
  yield all([charactersSagasWatcher()]);
}
