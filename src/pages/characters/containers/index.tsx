// Vendors
import React, { FC } from 'react';

// Locals
import { CharacterType } from '~store/ducks/characters/types';
import { Container, Title } from '~components';
import { CharactersContainerProps } from './types';
import { Cards, Card, CardName, Pagination } from './styles';

export const CharactersContainer: FC<CharactersContainerProps> = ({
  characters,
  loading,
  disablePrev,
  disableNext,
  onClickPrev,
  onClickNext,
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
      <Title>Characters Container</Title>
      {renderCards()}
      {renderLoading()}
      {renderPagination()}
    </Container>
  );
};
