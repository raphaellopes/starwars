// Locals
import {
  Types,
  SpeciesActionTypes,
  SpeciesStatusType,
  SpeciesDataType,
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
  data: SpeciesDataType;
}): SpeciesActionTypes => ({
  type: Types.SPECIES_DATA,
  payload,
});
