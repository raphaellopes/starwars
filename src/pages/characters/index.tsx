// Vendors
import React, { FC, useEffect } from 'react';

// Locals
import { useCharacterHook, CharacterType } from '~store/ducks/characters';
import { CharactersContainer } from './containers';

const Characters: FC = () => {
  const { dispatchers, loading, dataByPage, pagination } = useCharacterHook();
  const { currentPage: page } = pagination;
  const characters = dataByPage(page);
  const disablePrev = page < 2;
  const disableNext = page === pagination.totalPages;

  useEffect(() => {
    !characters.length && dispatchers.request(page);
  }, [page]);

  const handleClickNext = () => {
    const next = page + 1;
    dispatchers.setCurrentPage(next);
  };

  const handleClickPrev = () => {
    const next = page - 1;
    dispatchers.setCurrentPage(next);
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
