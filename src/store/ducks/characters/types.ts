// types
export enum CharactersCreators {
  CHAR_STATUS = 'characters/status',
  CHAR_FETCH = 'characters/fetch',
  CHAR_DATA = 'characters/data',
  CHAR_DATA_DETAIL = 'characters/data-detail',
}

// states
export type CharactersStatusType = 'initial' | 'fetching' | 'fetched';

export interface CharacterType {
  id: string;
  name: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
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
  payload: { id: string };
}

export interface CharactersStatusAction {
  type: typeof CharactersCreators.CHAR_STATUS;
  payload: { status: CharactersStatusType };
}

export interface CharactersDataAction {
  type: typeof CharactersCreators.CHAR_DATA;
  payload: { page: number; data: CharacterType[] };
}

export interface CharactersDataDetailAction {
  type: typeof CharactersCreators.CHAR_DATA_DETAIL;
  payload: { data: CharacterType };
}

export type CharactersActionTypes =
  | CharactersStatusAction
  | CharactersFetchAction
  | CharactersDataAction
  | CharactersDataDetailAction;
