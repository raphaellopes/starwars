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

export const charactersFetch = (page?: number): CharactersActionTypes => ({
  type: Types.CHAR_FETCH,
  payload: { page: page ? page : 1 },
});

export const charactersData = (payload: {
  page: number;
  data: CharactersDataType;
  totalPages: number;
}): CharactersActionTypes => ({
  type: Types.CHAR_DATA,
  payload,
});
