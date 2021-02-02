// types
const prefix = 'characters';
export const Types = {
  CHAR_STATUS: `${prefix}/status`,
};

// states
export interface CharacterType {
  name: string;
  height: string;
}

export interface CharactersStateType {
  status: string;
  loading: boolean;
  data: CharacterType[];
}

export type CharactersStatusType = 'initial' | 'fetching';

// actions
export interface CharactersStatusAction {
  type: typeof Types.CHAR_STATUS;
  payload: CharactersStatusType;
}

export type CharactersActionTypes = CharactersStatusAction;
