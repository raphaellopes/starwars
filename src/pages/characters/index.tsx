// Vendors
import React, { FC, useEffect, useState } from 'react';

// Locals
import { useCharacterHook, CharacterType } from '~store/ducks/characters';
import { CharactersContainer } from './containers';

const Characters: FC = () => {
  const { dispatchers, loading, dataByPage, pagination } = useCharacterHook();
  const [page, setPage] = useState<number>(pagination.currentPage);
  const characters = dataByPage(page);
  const disablePrev: boolean = page < 2;
  const disableNext: boolean = page === pagination.totalPages;

  useEffect(() => {
    !characters.length && dispatchers.request(page);
  }, [page]);

  const handleClickNext = () => {
    const next = page + 1;
    setPage(next);
  };

  const handleClickPrev = () => {
    const next = page - 1;
    setPage(next);
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
