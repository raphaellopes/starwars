export enum RoutesLabel {
  characters = 'Characters',
  species = 'Species',
}

export enum RoutesPath {
  characters = 'characters',
  species = 'species',
}

export interface RouteType {
  label: RoutesLabel;
  path: RoutesPath;
}

export const routes: RouteType[] = [
  {
    label: RoutesLabel.characters,
    path: RoutesPath.characters,
  },
  {
    label: RoutesLabel.species,
    path: RoutesPath.species,
  },
];
