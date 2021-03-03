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
  reducerKey === PaginationReducersType.Characters;

export function* charactersListFetch({ meta }: PaginationRequestAction) {
  if (!isSameReducer(meta.reducerKey)) return;

  yield put(actions.charactersStatus('fetching'));
}

export function* charactersListData({ payload, meta }: PaginationDataAction) {
  if (!isSameReducer(meta.reducerKey)) return;

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
