// Locals
import { Types, PaginationStateType, PaginationActionTypes } from './types';

export const initialState: PaginationStateType = {
  characters: {
    pages: {},
    currentPage: undefined,
  },
};

export const paginationReducers = (
  state: PaginationStateType = initialState,
  action: PaginationActionTypes
): PaginationStateType => {
  switch (action.type) {
    case Types.PAGINATION_DATA: {
      const { payload, meta } = action;
      return {
        ...state,
        [meta.reducerKey]: {
          pages: {
            ...state[meta.reducerKey]?.pages,
            [payload.page]: { ids: payload.ids },
          },
          currentPage: payload.page,
          totalPages: state[meta.reducerKey]?.totalPages
            ? state[meta.reducerKey].totalPages
            : payload.totalPages,
        },
      };
    }

    case Types.PAGINATION_SET_PAGE: {
      const { payload, meta } = action;
      return {
        ...state,
        [meta.reducerKey]: {
          ...state[meta.reducerKey],
          currentPage: payload.currentPage,
        },
      };
    }
    default:
      return state;
  }
};
