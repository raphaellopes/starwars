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
      const payloadStatus = action.payload?.status;
      const { status } = state;
      const result =
        status === payloadStatus
          ? state
          : {
              ...state,
              status: payloadStatus,
              loading: payloadStatus === 'fetching',
            };
      return result;
    case Types.CHAR_DATA:
      // @ts-ignore
      const { data, page, totalPages } = action.payload;
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
    case Types.CHAR_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          // @ts-ignore
          currentPage: action.payload.page,
        },
      };
    default:
      return state;
  }
};
