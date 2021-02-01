export interface SpecieProps {
  name: string;
  description: string;
  image: string;
}

export interface SpeciesContainerProps {
  species: SpecieProps[];
}
