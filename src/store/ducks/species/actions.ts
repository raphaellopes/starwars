// Locals
import {
  SpeciesCreators,
  SpeciesActionTypes,
  SpeciesStatusType,
  SpecieType,
} from './types';

export const speciesStatus = (
  status: SpeciesStatusType
): SpeciesActionTypes => ({
  type: SpeciesCreators.SPECIES_STATUS,
  payload: { status },
});

export const speciesFetch = (page?: number): SpeciesActionTypes => ({
  type: SpeciesCreators.SPECIES_FETCH,
  payload: { page: page ? page : 1 },
});

export const speciesData = (payload: {
  page: number;
  data: SpecieType[];
}): SpeciesActionTypes => ({
  type: SpeciesCreators.SPECIES_DATA,
  payload,
});
