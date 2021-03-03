// Locals
import {
  CharactersCreators,
  CharactersActionTypes,
  CharactersStatusType,
  CharacterType,
} from './types';

export const charactersStatus = (
  status: CharactersStatusType
): CharactersActionTypes => ({
  type: CharactersCreators.CHAR_STATUS,
  payload: { status },
});

export const charactersFetch = (page?: number): CharactersActionTypes => ({
  type: CharactersCreators.CHAR_FETCH,
  payload: { page: page ? page : 1 },
});

export const charactersData = (payload: {
  page: number;
  data: CharacterType[];
}): CharactersActionTypes => ({
  type: CharactersCreators.CHAR_DATA,
  payload,
});
