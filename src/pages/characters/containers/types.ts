export interface CharacterProps {
  name: string;
  description: string;
  image: string;
}

export interface CharactersContainerProps {
  characters: CharacterProps[];
}
