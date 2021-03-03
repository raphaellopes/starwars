// Vendors
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Locals
import { charactersReducer, charactersSagasWatcher } from './characters';
import { speciesReducer, speciesSagasWatcher } from './species';
import { paginationReducers, paginationSagasWatcher } from './pagination';

const rootReducer = combineReducers({
  characters: charactersReducer,
  species: speciesReducer,
  pagination: paginationReducers,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;

export function* rootSagas() {
  yield all([
    paginationSagasWatcher(),
    charactersSagasWatcher(),
    speciesSagasWatcher(),
  ]);
}
