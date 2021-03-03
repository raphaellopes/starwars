// Vendors
import { all, put, takeLatest } from 'redux-saga/effects';

// Locals
import { PaginationCreators } from '../pagination';
import * as actions from './actions';

export function* charactersListFetch() {
  console.log('charactersFetch');
  yield put(actions.charactersStatus('fetching'));
}

// @TODO: Fix types
export function* charactersListData({ payload }: any) {
  const { data, page } = payload;
  yield put(actions.charactersStatus('fetched'));
  yield put(
    actions.charactersData({
      page,
      data,
    })
  );
}

// watchers
export function* charactersPaginationWatcher() {
  yield takeLatest(PaginationCreators.PAGINATION_REQUEST, charactersListFetch);
  yield takeLatest(PaginationCreators.PAGINATION_DATA, charactersListData);
}

export function* charactersSagasWatcher() {
  yield all([charactersPaginationWatcher()]);
}
