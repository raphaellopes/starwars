// Locals
import { Types, PaginationReducersType, PaginationActionTypes } from './types';

export const paginationRequest = (
  payload: { page: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationActionTypes => ({
  type: Types.PAGINATION_REQUEST,
  payload: { page: payload.page ? payload.page : 1 },
  meta,
});

export const paginationData = (
  payload: { data: any[]; page: number; totalPages?: number },
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
