// Vendors
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Locals
import api from '~services/api';
import { Types, SpecieType, SpeciesDataType } from './types';
import * as actions from './actions';

// @TODO: This code is legacy. Refac this file when you create request for
//        single specie data. It will not be reusable
export function* speciesFetch({ payload }: any) {
  try {
    const { page } = payload;
    yield put(actions.speciesStatus('fetching'));
    const { data } = yield call(api.get, `species/?page=${page}`);
    const formattedData: SpeciesDataType = {};

    const result: SpecieType[] = data.results.map((item: any) => ({
      id: item.url.match(/(\d+)/)[0],
      name: item.name,
      classification: item.classification,
    }));

    result.map((item: SpecieType) => (formattedData[item.id] = item));

    yield put(actions.speciesStatus('fetched'));
  } catch (error) {
    console.error('>>> speciesFetch', { error });
    yield put(actions.speciesStatus('fetched'));
  }
}

// watchers
export function* speciesFetchWatcher() {
  yield takeLatest(Types.SPECIES_FETCH, speciesFetch);
}

export function* speciesSagasWatcher() {
  // all
  yield all([speciesFetchWatcher()]);
}
