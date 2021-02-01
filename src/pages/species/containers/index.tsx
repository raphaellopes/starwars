// Vendors
import React, { FC } from 'react';

// Locals
import { Container, Title, Avatar } from '~components';
import { SpeciesContainerProps, SpecieProps } from './types';
import { Cards, Card, CardName } from './styles';

export const SpeciesContainer: FC<SpeciesContainerProps> = ({ species }) => {
  const renderCards = ({ name, image }: SpecieProps, index: number) => (
    <Card key={`specie-item-${index}`}>
      <Avatar src={image} />
      <CardName>{name}</CardName>
    </Card>
  );

  return (
    <Container>
      <Title>Species Container</Title>
      <Cards>{species.map(renderCards)}</Cards>
    </Container>
  );
};
