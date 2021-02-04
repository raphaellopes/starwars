// Vendors
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Locals
import { charactersReducer, charactersSagasWatcher } from './characters';
import { paginationReducers } from './pagination';

const rootReducer = combineReducers({
  characters: charactersReducer,
  pagination: paginationReducers,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

export function* rootSagas() {
  yield all([charactersSagasWatcher()]);
}
