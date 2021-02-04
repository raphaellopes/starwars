// Locals
import {
  Types,
  PaginationStateType,
  PaginationDataAction,
  PaginationSetPageAction,
  PaginationActionTypes,
} from './types';

export const initialState: PaginationStateType = {
  characters: {
    pages: {},
    currentPage: undefined,
  },
};

export const paginationReducers = (
  state = initialState,
  action: PaginationActionTypes
): PaginationStateType => {
  const { payload, meta } = action;

  if (!action.meta) return state;

  switch (action.type) {
    case Types.PAGINATION_DATA:
      return {
        ...state,
        [meta.reducerKey]: {
          pages: {
            ...state[meta.reducerKey]?.pages,
            // @ts-ignore
            [payload.page]: { ids: payload.ids },
          },
          // @ts-ignore
          currentPage: payload.page,
          totalPages: state[meta.reducerKey]?.totalPages
            ? state[meta.reducerKey].totalPages
            : // @ts-ignore
              payload.totalPages,
        },
      };

    case Types.PAGINATION_SET_PAGE:
      return {
        ...state,
        [meta.reducerKey]: {
          ...state[meta.reducerKey],
          // @ts-ignore
          currentPage: payload.currentPage,
        },
      };
    default:
      return state;
  }
};
