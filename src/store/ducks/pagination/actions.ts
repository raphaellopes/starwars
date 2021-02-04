// Locals
import {
  Types,
  PaginationReducersType,
  PaginationDataAction,
  PaginationSetPageAction,
} from './types';

export const paginationData = (
  payload: { ids: string[]; page: number; totalPages?: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationDataAction => ({
  type: Types.PAGINATION_DATA,
  payload,
  meta,
});

export const paginationSetPage = (
  payload: { currentPage: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationSetPageAction => ({
  type: Types.PAGINATION_SET_PAGE,
  payload,
  meta,
});
