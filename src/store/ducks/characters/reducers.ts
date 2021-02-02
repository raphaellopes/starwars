// Locals
import { CharactersStateType, CharactersActionTypes, Types } from './types';

export const initialState: CharactersStateType = {
  status: 'initial',
  loading: false,
  data: [],
};

export const charactersReducer = (
  state = initialState,
  action: CharactersActionTypes
): CharactersStateType => {
  const { payload } = action;
  switch (action.type) {
    case Types.CHAR_STATUS:
      const { status } = state;
      const result = status === payload ? state : { ...state, status: payload };
      return result;
    default:
      return state;
  }
};
