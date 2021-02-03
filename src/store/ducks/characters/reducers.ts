// Locals
import { CharactersStateType, CharactersActionTypes, Types } from './types';

export const initialState: CharactersStateType = {
  status: 'initial',
  loading: false,
  data: {},
  pagination: {
    pages: {},
    currentPage: 1,
    totalPages: undefined,
  },
};

export const charactersReducer = (
  state = initialState,
  action: CharactersActionTypes
): CharactersStateType => {
  switch (action.type) {
    case Types.CHAR_STATUS:
      // @ts-ignore
      const payload = action?.payload;
      const { status } = state;
      const result =
        status === payload
          ? state
          : { ...state, status: payload, loading: payload === 'fetching' };
      // @ts-ignore
      return result;
    case Types.CHAR_DATA:
      // @ts-ignore
      const payload = action?.payload;
      // @ts-ignore
      const { data, page, totalPages } = payload;
      const pagination = { [page]: { ids: Object.keys(data), fetched: true } };
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...data },
        pagination: {
          pages: { ...state.pagination.pages, ...pagination },
          currentPage: page,
          totalPages: state.pagination.totalPages
            ? state.pagination.totalPages
            : totalPages,
        },
      };
    default:
      return state;
  }
};
