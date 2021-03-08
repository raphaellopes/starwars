// Vendors
import React, { FC, useEffect } from 'react';

// Locals
import { useSpecieHook } from '~store/ducks/species';
import { usePaginationHook } from '~store/ducks/pagination';
import { PaginationReducersType } from '~store/ducks/pagination/types';
import { ListPagination } from '~components';

const Species: FC = () => {
  const { loading, dataByPage } = useSpecieHook();
  const {
    currentPage: page,
    totalPages,
    dispatchers: paginationDispatchers,
  } = usePaginationHook(PaginationReducersType.Species);
  const species = dataByPage(page);
  const disablePrev = page < 2;
  const disableNext = page === totalPages;

  useEffect(() => {
    !species.length && paginationDispatchers.request(page || 1);
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
    <ListPagination
      title="Species"
      loading={loading}
      cardKeyPrefix="species"
      data={species}
      disablePrev={disablePrev}
      disableNext={disableNext}
      onClickPrev={handleClickPrev}
      onClickNext={handleClickNext}
    />
  );
};

export default Species;
