// Vendors
import React, { FC, useEffect } from 'react';

// Locals
import { useCharacterHook } from '~store/ducks/characters';
import { CharactersContainer } from './containers';

const Characters: FC = () => {
  const { dispatchers, data, loading } = useCharacterHook();

  useEffect(() => {
    dispatchers.request();
  }, []);

  return <CharactersContainer loading={loading} characters={data} />;
};

export default Characters;
