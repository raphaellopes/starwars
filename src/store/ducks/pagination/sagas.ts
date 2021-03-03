// Vendors
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Locals
import api from '~services/api';
import * as paginationActions from '../pagination/actions';
import { PaginationCreators } from './types';

export function* paginationFetch({ payload, meta }: any) {
  try {
    const { page } = payload;

    // @TODO: improve it
    const apiPage = meta.reducerKey === 'characters' ? 'people' : 'species';
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
  } catch (error) {
    console.error('>>> paginationFetch', { error });
  }
}

// watchers
export function* paginationFetchWatcher() {
  yield takeLatest(PaginationCreators.PAGINATION_REQUEST, paginationFetch);
}

export function* paginationSagasWatcher() {
  yield all([paginationFetchWatcher()]);
}
