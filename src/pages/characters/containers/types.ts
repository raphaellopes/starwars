// Locals
import { CharacterType } from '~store/ducks/characters/types';

export interface CharactersContainerProps {
  loading: boolean;
  characters: CharacterType[];
  disablePrev: boolean;
  disableNext: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
}
