// Vendors
import React, { FC } from 'react';

// Locals
import { Container, Title, Card, Avatar } from '~components';
import { CharactersContainerProps, CharacterProps } from './types';

export const CharactersContainer: FC<CharactersContainerProps> = ({
  characters,
}) => {
  const renderCards = (
    { name, description, image }: CharacterProps,
    index: number
  ) => (
    <div key={`character-item-${index}`}>
      <Avatar src={image} />
      <p>
        <b>{name}</b>
      </p>
      <p>{description}</p>
    </div>
  );

  return (
    <Container>
      <Title>Characters Container</Title>
      <div>{characters.map(renderCards)}</div>
    </Container>
  );
};
