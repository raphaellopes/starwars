// Locals
import { CharactersStateType, CharactersActionTypes, Types } from './types';

export const initialState: CharactersStateType = {
  status: 'initial',
  loading: false,
  data: {},
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
      return { ...state, loading: false, data: { ...state.data, ...payload } };
    default:
      return state;
  }
};
