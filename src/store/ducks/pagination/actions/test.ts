import * as actions from './index';
import { PaginationCreators, PaginationReducersType } from '../types';

describe('redux | pagination | actions', () => {
  test('should create an action for request', () => {
    const payload = { page: 1 };
    const meta = { reducerKey: PaginationReducersType.Characters };
    const expectedAction = {
      type: PaginationCreators.PAGINATION_REQUEST,
      payload,
      meta,
    };
    expect(actions.paginationRequest(payload, meta)).toEqual(expectedAction);
  });

  test('should create an action for receive data', () => {
    const payload = { page: 1, data: [{ prop: '' }], totalPages: 10 };
    const meta = { reducerKey: PaginationReducersType.Characters };
    const expectedAction = {
      type: PaginationCreators.PAGINATION_DATA,
      payload,
      meta,
    };
    expect(actions.paginationData(payload, meta)).toEqual(expectedAction);
  });

  test('should create an action for set current page', () => {
    const payload = { currentPage: 1 };
    const meta = { reducerKey: PaginationReducersType.Characters };
    const expectedAction = {
      type: PaginationCreators.PAGINATION_SET_PAGE,
      payload,
      meta,
    };
    expect(actions.paginationSetPage(payload, meta)).toEqual(expectedAction);
  });
});
