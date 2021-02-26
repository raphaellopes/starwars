// Vendors
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Locals
import api from '~services/api';
import * as paginationActions from '../pagination/actions';
import { PaginationReducersType } from '../pagination/types';
import { Types, CharacterType, CharactersDataType } from './types';
import * as actions from './actions';

// @TODO: This code is legacy. Refac this file when you create request for
//        single character data. It will not be reusable
export function* charactersFetch({ payload }: any) {
  try {
    const { page } = payload;
    yield put(actions.charactersStatus('fetching'));
    const { data } = yield call(api.get, `people/?page=${page}`);
    const formattedData: CharactersDataType = {};
    const perPage = 10;

    const result: CharacterType[] = data.results.map((item: any) => ({
      id: item.url.match(/(\d+)/)[0],
      name: item.name,
      height: item.height,
    }));

    result.map((item: CharacterType) => (formattedData[item.id] = item));

    yield put(
      paginationActions.paginationData(
        {
          data: result,
          page,
          totalPages: Math.ceil(data.count / perPage),
        },
        { reducerKey: PaginationReducersType.Characters }
      )
    );

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
