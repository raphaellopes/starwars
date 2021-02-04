// Vendors
import React, { FC, useEffect } from 'react';

// Locals
import { useSpecieHook, SpecieType } from '~store/ducks/species';
import { usePaginationHook } from '~store/ducks/pagination';
import { SpeciesContainer } from './containers';

import mock from './mock';

const Species: FC = () => {
  const { dispatchers, loading, dataByPage } = useSpecieHook();
  const {
    currentPage: page,
    totalPages,
    dispatchers: paginationDispatchers,
  } = usePaginationHook('species');
  const species = dataByPage(page);
  const disablePrev = page < 2;
  const disableNext = page === totalPages;

  useEffect(() => {
    !species.length && dispatchers.request(page);
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
    <SpeciesContainer
      loading={loading}
      species={species}
      disablePrev={disablePrev}
      disableNext={disableNext}
      onClickPrev={handleClickPrev}
      onClickNext={handleClickNext}
    />
  );
};

export default Species;
