// Vendors
import React, { FC } from 'react';

// Locals
import { SpecieType } from '~store/ducks/species/types';
import { Container, Title } from '~components';
import { SpeciesContainerProps } from './types';
import { Cards, Card, CardName, Pagination } from './styles';

export const SpeciesContainer: FC<SpeciesContainerProps> = ({
  species,
  loading,
  disablePrev,
  disableNext,
  onClickPrev,
  onClickNext,
}) => {
  const handleClickCard = () => console.log('handleClickCard');

  // renders
  const renderCard = ({ name }: SpecieType, index: number) => (
    <Card key={`specie-item-${index}`} onClick={handleClickCard}>
      <CardName>{name}</CardName>
    </Card>
  );

  const renderCards = () =>
    !loading && <Cards>{species.map(renderCard)}</Cards>;

  const renderPagination = () =>
    !loading && (
      <Pagination
        disablePrev={disablePrev}
        disableNext={disableNext}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    );

  // @TODO: Relpace by placeholder component
  const renderLoading = () => loading && <p>loading...</p>;

  return (
    <Container>
      <Title>Species Container</Title>
      {renderCards()}
      {renderLoading()}
      {renderPagination()}
    </Container>
  );
};
