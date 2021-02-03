// Vendors
import React, { FC, useEffect } from 'react';

// Locals
import { useCharacterHook, CharacterType } from '~store/ducks/characters';
import { CharactersContainer } from './containers';

const Characters: FC = () => {
  const { dispatchers, data, loading } = useCharacterHook();
  const characters: CharacterType[] = Object.entries(data).map(
    (item) => item[1]
  );

  useEffect(() => {
    dispatchers.request();
  }, []);

  return <CharactersContainer loading={loading} characters={characters} />;
};

export default Characters;
