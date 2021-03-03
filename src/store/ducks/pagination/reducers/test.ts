import * as reducers from './index';
import * as actions from '../actions';
import { PaginationCreators, PaginationReducersType } from '../types';

describe('redux | pagination | reducers', () => {
  test('should return the initial state', () => {
    expect(reducers.paginationReducers(undefined, {})).toEqual(
      reducers.initialState
    );
  });

  test('should handle PAGINATION_DATA', () => {
    const payload = { data: [{ id: 'I1' }], page: 1 };
    const expected = {
      characters: {
        currentPage: 1,
        pages: {
          1: {
            ids: ['I1'],
          },
        },
      },
    };
    const actions = {
      type: PaginationCreators.PAGINATION_DATA,
      payload,
      meta: { reducerKey: PaginationReducersType.Characters },
    };
    expect(reducers.paginationReducers({}, actions)).toEqual(expected);
  });

  test('should handle PAGINATION_SET_PAGE', () => {
    const payload = { currentPage: 2 };
    const expected = {
      characters: {
        currentPage: 2,
      },
    };
    const actions = {
      type: PaginationCreators.PAGINATION_SET_PAGE,
      payload,
      meta: { reducerKey: PaginationReducersType.Characters },
    };
    expect(reducers.paginationReducers({}, actions)).toEqual(expected);
  });
});
