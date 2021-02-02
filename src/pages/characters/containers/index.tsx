// Vendors
import React, { FC } from 'react';

// Locals
import { useCharacterHook } from '~store/ducks/characters';
import { Container, Title, Avatar } from '~components';
import { CharactersContainerProps, CharacterProps } from './types';
import { Cards, Card, CardName } from './styles';

export const CharactersContainer: FC<CharactersContainerProps> = ({
  characters,
}) => {
  // @TODO: Remove testing with redux
  const { status, data, dispatchers } = useCharacterHook();

  console.log('>>>', { status, data, dispatchers });

  const handleClickCard = () => dispatchers.setStatus('fetching');

  // renders
  const renderCards = ({ name, image }: CharacterProps, index: number) => (
    <Card key={`character-item-${index}`} onClick={handleClickCard}>
      <Avatar src={image} />
      <CardName>{name}</CardName>
    </Card>
  );

  return (
    <Container>
      <Title>Characters Container</Title>
      <Cards>{characters.map(renderCards)}</Cards>
    </Container>
  );
};
