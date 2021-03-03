// Vendors
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Locals
import api from '~services/api';
import {
  paginationSagasWatcher,
  paginationFetchWatcher,
  paginationFetch,
} from './index';

jest.mock('~services/api');

describe('redux | pagination | sagas', () => {
  test('paginationSagasWatcher()', () => {
    const generator = paginationSagasWatcher();
    const expected = all([paginationFetchWatcher()]);
    expect(generator.next().value).toEqual(expected);
  });

  // @TODO: mock results from api
  test('paginationFetch()', () => {
    const payload = { page: 1 };
    const meta = { reducerKey: 'characters' };
    const generator = paginationFetch({ payload, meta });
    const expected = call(api.get, `people/?page=${payload.page}`);

    expect(generator.next().value).toEqual(expected);
  });
});
