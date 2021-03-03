// types
export enum SpeciesCreators {
  SPECIES_STATUS = 'species/status',
  SPECIES_FETCH = 'species/fetch',
  SPECIES_DATA = 'species/data',
}

// states
export type SpeciesStatusType = 'initial' | 'fetching' | 'fetched';

export interface SpecieType {
  id: string;
  name: string;
  classification: string;
}

export interface SpeciesDataType {
  [key: string]: SpecieType;
}

export interface SpeciesStateType {
  status: SpeciesStatusType;
  loading: boolean;
  data: SpeciesDataType;
}

// actions
export interface SpeciesFetchAction {
  type: typeof SpeciesCreators.SPECIES_FETCH;
  payload?: { page: number };
}

export interface SpeciesStatusAction {
  type: typeof SpeciesCreators.SPECIES_STATUS;
  payload: { status: SpeciesStatusType };
}

export interface SpeciesDataAction {
  type: typeof SpeciesCreators.SPECIES_DATA;
  payload: { page: number; data: SpecieType[] };
}

export type SpeciesActionTypes =
  | SpeciesStatusAction
  | SpeciesFetchAction
  | SpeciesDataAction;
