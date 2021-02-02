// Vendors
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Locals
import api from '~services/api';
import { Types, CharacterType } from './types';
import * as actions from './actions';

export function* charactersFetch() {
  try {
    yield put(actions.charactersStatus('fetching'));
    const { data } = yield call(api.get, 'people');

    const result: CharacterType[] = data.results.map((item: any) => ({
      name: item.name,
      height: item.height,
    }));

    yield put(actions.charactersData(result));
    yield put(actions.charactersStatus('fetched'));
  } catch (error) {
    console.error('>>> charactersFetch', { error });
    yield put(actions.charactersStatus('fetched'));
  }
}

// watchers
export function* charactersFetchWatcher() {
  yield takeLatest(Types.CHAR_FETCH, charactersFetch);
}

export function* charactersSagasWatcher() {
  // all
  yield all([charactersFetchWatcher()]);
}
