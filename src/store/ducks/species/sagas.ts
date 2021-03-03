// Vendors
import { all, put, takeLatest } from 'redux-saga/effects';

// Locals
import {
  PaginationCreators,
  PaginationReducersType,
  PaginationDataAction,
  PaginationRequestAction,
} from '../pagination';
import * as actions from './actions';

const isSameReducer = (reducerKey: PaginationReducersType) =>
  reducerKey === PaginationReducersType.Species;

export function* speciesListFetch({ meta }: PaginationRequestAction) {
  if (!isSameReducer(meta.reducerKey)) return;

  yield put(actions.speciesStatus('fetching'));
}

export function* speciesListData({ payload, meta }: PaginationDataAction) {
  if (!isSameReducer(meta.reducerKey)) return;

  const { data, page } = payload;
  yield put(actions.speciesStatus('fetched'));
  yield put(
    actions.speciesData({
      page,
      data,
    })
  );
}

// watchers
export function* speciesListWatcher() {
  yield takeLatest(PaginationCreators.PAGINATION_REQUEST, speciesListFetch);
  yield takeLatest(PaginationCreators.PAGINATION_DATA, speciesListData);
}

export function* speciesSagasWatcher() {
  yield all([speciesListWatcher()]);
}
