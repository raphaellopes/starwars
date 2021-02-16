// Locals
import {
  CharactersStateType,
  CharactersActionTypes,
  Types,
  CharactersDataType,
  CharacterType,
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
    case Types.CHAR_STATUS: {
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
    case Types.CHAR_DATA: {
      const formattedData: CharactersDataType = {};
      const { data } = action.payload;

      data.map((item: CharacterType) => (formattedData[item.id] = item));

      return {
        ...state,
        loading: false,
        data: { ...state.data, ...formattedData },
      };
    }
    default:
      return state;
  }
};
