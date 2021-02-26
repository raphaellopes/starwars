// Vendors
import React, { FC, useEffect } from 'react';

// Locals
import { useCharacterHook } from '~store/ducks/characters';
import { usePaginationHook } from '~store/ducks/pagination';
import { PaginationReducersType } from '~store/ducks/pagination/types';
import { CharactersContainer } from './containers';

const Characters: FC = () => {
  const { loading, dataByPage } = useCharacterHook();
  const {
    currentPage: page,
    totalPages,
    dispatchers: paginationDispatchers,
  } = usePaginationHook(PaginationReducersType.Characters);
  const characters = dataByPage(page);
  const disablePrev = page < 2;
  const disableNext = page === totalPages;

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

  return (
    <CharactersContainer
      loading={loading}
      characters={characters}
      disablePrev={disablePrev}
      disableNext={disableNext}
      onClickPrev={handleClickPrev}
      onClickNext={handleClickNext}
    />
  );
};

export default Characters;
