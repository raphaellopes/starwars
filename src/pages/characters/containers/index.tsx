// Vendors
import React, { FC } from 'react';

// Locals
import { CharacterType } from '~store/ducks/characters/types';
import { Container, Title, CardForward } from '~components';
import { CharactersContainerProps } from './types';
import { Cards, Pagination } from './styles';

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
    <CardForward
      key={`character-item-${index}`}
      onClick={handleClickCard}
      text={name}
    />
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
