// Locals
import {
  Types,
  CharactersActionTypes,
  CharactersStatusType,
  CharactersDataType,
} from './types';

export const charactersStatus = (
  payload: CharactersStatusType
): CharactersActionTypes => ({
  type: Types.CHAR_STATUS,
  payload,
});

export const charactersFetch = (): CharactersActionTypes => ({
  type: Types.CHAR_FETCH,
});

export const charactersData = (
  payload: CharactersDataType
): CharactersActionTypes => ({
  type: Types.CHAR_DATA,
  payload,
});
