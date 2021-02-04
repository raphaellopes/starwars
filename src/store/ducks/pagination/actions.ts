// Locals
import {
  Types,
  PaginationReducersType,
  PaginationDataAction,
  PaginationSetPageAction,
  PaginationActionTypes,
} from './types';

export const paginationData = (
  payload: { ids: string[]; page: number; totalPages?: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationActionTypes => ({
  type: Types.PAGINATION_DATA,
  payload,
  meta,
});

export const paginationSetPage = (
  payload: { currentPage: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationActionTypes => ({
  type: Types.PAGINATION_SET_PAGE,
  payload,
  meta,
});