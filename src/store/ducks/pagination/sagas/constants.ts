import { PaginationReducersType } from '../types';

interface ApiPathTypes {
  [PaginationReducersType.Characters]: string;
  [PaginationReducersType.Species]: string;
}

export const API_PATHS: ApiPathTypes = {
  [PaginationReducersType.Characters]: 'people',
  [PaginationReducersType.Species]: 'species',
};
