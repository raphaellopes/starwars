// Locals
import {
  Types,
  SpeciesActionTypes,
  SpeciesStatusType,
  SpecieType,
} from './types';

export const speciesStatus = (
  status: SpeciesStatusType
): SpeciesActionTypes => ({
  type: Types.SPECIES_STATUS,
  payload: { status },
});

export const speciesFetch = (page?: number): SpeciesActionTypes => ({
  type: Types.SPECIES_FETCH,
  payload: { page: page ? page : 1 },
});

export const speciesData = (payload: {
  page: number;
  data: SpecieType[];
}): SpeciesActionTypes => ({
  type: Types.SPECIES_DATA,
  payload,
});
