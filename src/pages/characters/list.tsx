// Vendors
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Locals
import { useCharacterHook } from '~store/ducks/characters';
import { usePaginationHook } from '~store/ducks/pagination';
import { PaginationReducersType } from '~store/ducks/pagination/types';
import { ListPagination } from '~components';

const CharactersList: FC = () => {
  const { loading, dataByPage } = useCharacterHook();
  const {
    currentPage: page,
    totalPages,
    dispatchers: paginationDispatchers,
  } = usePaginationHook(PaginationReducersType.Characters);
  const characters = dataByPage(page);
  const disablePrev = page < 2;
  const disableNext = page === totalPages;
  const history = useHistory();

  useEffect(() => {
    !characters.length && paginationDispatchers.request(page || 1);
  }, [page]);

  const handleClickNext = () => {
    const next = page + 1;
    paginationDispatchers.setCurrentPage(next);
  };

  const handleClickPrev = () => {
    const next = page - 1;
    paginationDispatchers.setCurrentPage(next);
  };

  const handleClickCard = (id: string) => history.push(`/characters/${id}`);

  return (
    <ListPagination
      title="Characters"
      loading={loading}
      cardKeyPrefix="characters"
      data={characters}
      disablePrev={disablePrev}
      disableNext={disableNext}
      onClickPrev={handleClickPrev}
      onClickNext={handleClickNext}
      onClickCard={handleClickCard}
    />
  );
};

export default CharactersList;
