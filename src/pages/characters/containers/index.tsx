// Vendors
import React, { FC } from 'react';

// Locals
import { CharacterType } from '~store/ducks/characters/types';
import { Container, Title, Avatar } from '~components';
import { CharactersContainerProps } from './types';
import { Cards, Card, CardName } from './styles';

export const CharactersContainer: FC<CharactersContainerProps> = ({
  characters,
  loading,
}) => {
  const handleClickCard = () => console.log('handleClickCard');

  // renders
  const renderCard = ({ name }: CharacterType, index: number) => (
    <Card key={`character-item-${index}`} onClick={handleClickCard}>
      <CardName>{name}</CardName>
    </Card>
  );

  const renderCards = () =>
    !loading && <Cards>{characters.map(renderCard)}</Cards>;

  return (
    <Container>
      <Title>Characters Container</Title>
      {renderCards()}
      {loading && <p>loading...</p>}
    </Container>
  );
};
