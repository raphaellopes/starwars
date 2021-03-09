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

export const charactersFetch = (id: string): CharactersActionTypes => ({
  type: CharactersCreators.CHAR_FETCH,
  payload: { id },
});

export const charactersData = (payload: {
  page: number;
  data: CharacterType[];
}): CharactersActionTypes => ({
  type: CharactersCreators.CHAR_DATA,
  payload,
});

export const charactersDataDetail = (payload: {
  data: CharacterType;
}): CharactersActionTypes => ({
  type: CharactersCreators.CHAR_DATA_DETAIL,
  payload,
});
