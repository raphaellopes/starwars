// Vendors
import { all, put, takeLatest, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Locals
import api from '~services/api';
import { CharactersSchema } from '../../schema';
import {
  PaginationCreators,
  PaginationReducersType,
  PaginationDataAction,
  PaginationRequestAction,
} from '../pagination';
import { CharactersCreators } from './types';
import * as actions from './actions';

const isSameReducer = (reducerKey: PaginationReducersType) =>
  reducerKey === PaginationReducersType.Characters;

// pagination
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
      // @ts-ignore
      data: normalize(data, [CharactersSchema]).entities.characters,
    })
  );
}

export function* charactersPaginationWatcher() {
  yield takeLatest(PaginationCreators.PAGINATION_REQUEST, charactersListFetch);
  yield takeLatest(PaginationCreators.PAGINATION_DATA, charactersListData);
}

// single data
export function* characterFetch({ payload }: any) {
  try {
    const { id } = payload;

    const { data } = yield call(api.get, `people/${id}`);

    yield put(actions.charactersStatus('fetching'));

    yield put(
      actions.charactersDataDetail({
        // @ts-ignore
        data: normalize(
          [
            {
              ...data,
              id: data.url.match(/(\d+)/)[0],
            },
          ],
          [CharactersSchema]
        ).entities.characters,
      })
    );
    yield put(actions.charactersStatus('fetched'));
  } catch (error) {
    console.error('>>> characterFetch', { error });
  }
}

export function* charactersWatcher() {
  yield takeLatest(CharactersCreators.CHAR_FETCH, characterFetch);
}

export function* charactersSagasWatcher() {
  yield all([charactersPaginationWatcher(), charactersWatcher()]);
}
