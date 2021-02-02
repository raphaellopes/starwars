// types
const prefix = 'characters';
export const Types = {
  CHAR_STATUS: `${prefix}/status`,
  CHAR_FETCH: `${prefix}/fetch`,
  CHAR_DATA: `${prefix}/data`,
};

// states
export type CharactersStatusType = 'initial' | 'fetching' | 'fetched';

export interface CharacterType {
  name: string;
  height: string;
}

export interface CharactersStateType {
  status: CharactersStatusType;
  loading: boolean;
  data: CharacterType[];
}

// actions
export interface CharactersStatusAction {
  type: typeof Types.CHAR_STATUS;
  payload: CharactersStatusType;
}

export interface CharactersFetchAction {
  type: typeof Types.CHAR_FETCH;
}

export interface CharactersDataAction {
  type: typeof Types.CHAR_DATA;
  payload: CharacterType[];
}

export type CharactersActionTypes =
  | CharactersStatusAction
  | CharactersFetchAction
  | CharactersDataAction;
