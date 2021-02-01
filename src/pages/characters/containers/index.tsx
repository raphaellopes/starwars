// Vendors
import React, { FC } from 'react';

// Locals
import { Container, Title, Avatar } from '~components';
import { CharactersContainerProps, CharacterProps } from './types';
import { Cards, Card, CardName } from './styles';

export const CharactersContainer: FC<CharactersContainerProps> = ({
  characters,
}) => {
  const renderCards = ({ name, image }: CharacterProps, index: number) => (
    <Card key={`character-item-${index}`}>
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
