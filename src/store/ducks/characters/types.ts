// types
const prefix = 'characters';
export const Types = {
  CHAR_STATUS: `${prefix}/status`,
  CHAR_FETCH: `${prefix}/fetch`,
  CHAR_DATA: `${prefix}/data`,
  CHAR_PAGE: `${prefix}/page`,
};

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
  pagination: {
    pages: {
      [key: number]: {
        ids: string[];
        fetched: boolean;
      };
    };
    totalPages?: number;
    currentPage: number;
  };
}

// actions
export interface CharactersFetchAction {
  type: typeof Types.CHAR_FETCH;
  payload?: { page: number };
}

export interface CharactersStatusAction {
  type: typeof Types.CHAR_STATUS;
  payload: { status: CharactersStatusType };
}

export interface CharactersPageAction {
  type: typeof Types.CHAR_PAGE;
  payload: { page: number };
}

export interface CharactersDataAction {
  type: typeof Types.CHAR_DATA;
  payload: { page: number; totalPages?: number; data: CharactersDataType };
}

export type CharactersActionTypes =
  | CharactersStatusAction
  | CharactersFetchAction
  | CharactersDataAction
  | CharactersPageAction;
