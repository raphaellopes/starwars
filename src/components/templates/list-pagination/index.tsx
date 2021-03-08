// Vendors
import React, { FC } from 'react';

// Locals
import { Title, CardForward } from '~components';
import { ListPaginationProps } from './types';
import { Container, Cards, Pagination } from './styles';

export const ListPagination: FC<ListPaginationProps> = ({
  title,
  data,
  cardKeyPrefix,
  loading,
  disablePrev,
  disableNext,
  onClickPrev,
  onClickNext,
}) => {
  const handleClickCard = () => console.log('handleClickCard');

  // renders
  const renderCard = ({ name }: any, index: number) => (
    <CardForward
      key={`${cardKeyPrefix}-item-${index}`}
      onClick={handleClickCard}
      text={name}
    />
  );

  const renderCards = () => !loading && <Cards>{data.map(renderCard)}</Cards>;

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
      <Title>{title}</Title>
      {renderCards()}
      {renderLoading()}
      {renderPagination()}
    </Container>
  );
};
