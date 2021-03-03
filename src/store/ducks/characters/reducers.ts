// Locals
import {
  CharactersStateType,
  CharactersActionTypes,
  CharactersCreators,
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
    case CharactersCreators.CHAR_DATA: {
      const formattedData: CharactersDataType = {};
      const { data } = action.payload;

      data.map((item: CharacterType) => (formattedData[item.id] = item));

      return {
        ...state,
        data: { ...state.data, ...formattedData },
      };
    }
    default:
      return state;
  }
};
