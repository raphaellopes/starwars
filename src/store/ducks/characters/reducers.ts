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
      const { data } = action.payload;

      return {
        ...state,
        loading: false,
        data: { ...state.data, ...data },
      };
    default:
      return state;
  }
};
