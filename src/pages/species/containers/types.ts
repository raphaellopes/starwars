// Locals
import { SpecieType } from '~store/ducks/species/types';

export interface SpeciesContainerProps {
  loading: boolean;
  species: SpecieType[];
  disablePrev: boolean;
  disableNext: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
}
