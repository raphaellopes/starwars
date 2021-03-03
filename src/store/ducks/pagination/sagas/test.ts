// Vendors
import * as sinon from 'sinon';
import { runSaga } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Locals
import api from '~services/api';
import { paginationData } from '../actions';
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

  test('paginationFetch()', () => {
    const payload = { page: 1 };
    const meta = { reducerKey: 'characters' };
    const params = { payload, meta };
    const apiUrl = `people/?page=${payload.page}`;
    const item = { url: 'http://api/1/' };
    const response = {
      data: { results: [item], count: 10 },
    };

    const generator = paginationFetch({ payload, meta });
    const expectedCall = call(api.get, apiUrl);

    expect(generator.next().value).toEqual(expectedCall);
    const expectedPutData = put(
      paginationData(
        { data: [{ ...item, id: '1' }], page: payload.page, totalPages: 1 },
        meta
      )
    );
    expect(generator.next(response).value).toEqual(expectedPutData);
  });

  test('paginationFetch() > error', () => {
    try {
      const generator = paginationFetch({});
      generator.next();
    } catch (error) {
      expect(error).toThrow();
    }
  });
});
