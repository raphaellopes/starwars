// Locals
import { PaginationCreators, PaginationReducersType, PaginationActionTypes } from '../types';

export const paginationRequest = (
  payload: { page: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationActionTypes => ({
  type: PaginationCreators.PAGINATION_REQUEST,
  payload: { page: payload.page },
  meta,
});

export const paginationData = (
  payload: { data: any[]; page: number; totalPages?: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationActionTypes => ({
  type: PaginationCreators.PAGINATION_DATA,
  payload,
  meta,
});

export const paginationSetPage = (
  payload: { currentPage: number },
  meta: { reducerKey: PaginationReducersType }
): PaginationActionTypes => ({
  type: PaginationCreators.PAGINATION_SET_PAGE,
  payload,
  meta,
});
