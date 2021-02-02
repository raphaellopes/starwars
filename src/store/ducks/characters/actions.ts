// Locals
import { Types, CharactersActionTypes, CharactersStatusType } from './types';

export const charactersStatus = (
  payload: CharactersStatusType
): CharactersActionTypes => ({
  type: Types.CHAR_STATUS,
  payload,
});
