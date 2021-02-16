// Vendors
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Locals
import api from '~services/api';
import * as paginationActions from '../pagination/actions';
import { Types } from './types';
import * as characterActions from '../characters/actions';
import * as speciesActions from '../species/actions';

function* setLoading(reducerKey: any, value: any) {
  if (reducerKey === 'characters') {
    yield put(characterActions.charactersStatus(value));
  }
  if (reducerKey === 'species') {
    yield put(speciesActions.speciesStatus(value));
  }
}

export function* paginationFetch({ payload, meta }: any) {
  try {
    const { page } = payload;

    // @TODO: improve it
    const apiPage = meta.reducerKey === 'characters' ? 'people' : 'species';
    yield setLoading(meta.reducerKey, 'fetching');
    const { data } = yield call(api.get, `${apiPage}/?page=${page}`);
    const perPage = 10;

    const result: any[] = data.results.map((item: any) => ({
      ...item,
      id: item.url.match(/(\d+)/)[0],
    }));

    yield put(
      paginationActions.paginationData(
        {
          data: result,
          page,
          totalPages: Math.ceil(data.count / perPage),
        },
        { reducerKey: meta.reducerKey }
      )
    );

    // @TODO: improve the lines bellow
    if (meta.reducerKey === 'characters') {
      yield put(
        characterActions.charactersData({
          page,
          data: result,
        })
      );
    }

    if (meta.reducerKey === 'species') {
      yield put(
        speciesActions.speciesData({
          page,
          data: result,
        })
      );
    }

    yield setLoading(meta.reducerKey, 'fetched');
  } catch (error) {
    console.error('>>> paginationFetch', { error });
    yield setLoading(meta.reducerKey, 'fetched');
  }
}

// watchers
export function* paginationFetchWatcher() {
  yield takeLatest(Types.PAGINATION_REQUEST, paginationFetch);
}

export function* paginationSagasWatcher() {
  // all
  yield all([paginationFetchWatcher()]);
}
