// types
export enum CharactersCreators {
  CHAR_STATUS = 'characters/status',
  CHAR_FETCH = 'characters/fetch',
  CHAR_DATA = 'characters/data',
}

// states
export type CharactersStatusType = 'initial' | 'fetching' | 'fetched';

export interface CharacterType {
  id: string;
  name: string;
  height: string;
}

export interface CharactersDataType {
  [key: string]: CharacterType;
}

export interface CharactersStateType {
  status: CharactersStatusType;
  loading: boolean;
  data: CharactersDataType;
}

// actions
export interface CharactersFetchAction {
  type: typeof CharactersCreators.CHAR_FETCH;
  payload?: { page: number };
}

export interface CharactersStatusAction {
  type: typeof CharactersCreators.CHAR_STATUS;
  payload: { status: CharactersStatusType };
}

export interface CharactersDataAction {
  type: typeof CharactersCreators.CHAR_DATA;
  payload: { page: number; data: CharacterType[] };
}

export type CharactersActionTypes =
  | CharactersStatusAction
  | CharactersFetchAction
  | CharactersDataAction;
