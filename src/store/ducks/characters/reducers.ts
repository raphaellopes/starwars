// Locals
import { CharactersStateType, CharactersActionTypes, Types } from './types';

export const initialState: CharactersStateType = {
  status: 'initial',
  loading: false,
  data: {},
  pagination: {
    pages: {},
    currentPage: 1,
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
      const data = payload.data;
      console.log('>>>', { payload });
      return { ...state, loading: false, data: { ...state.data, ...data } };
    default:
      return state;
  }
};
