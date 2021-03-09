// Locals
// import { CharactersSchema } from '../../schema';
import {
  CharactersStateType,
  CharactersActionTypes,
  CharactersCreators,
  CharactersDataType,
} from './types';

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
    case CharactersCreators.CHAR_STATUS: {
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
    }
    case CharactersCreators.CHAR_DATA:
    case CharactersCreators.CHAR_DATA_DETAIL: {
      const { data } = action.payload;
      const result: CharactersDataType = Object.entries(data).reduce(
        (merged, [id, item]) => ({
          ...merged,
          [id]: {
            ...(merged[id] || {}),
            ...item,
          },
        }),
        state.data
      );

      return {
        ...state,
        data: result,
      };
    }
    default:
      return state;
  }
};
