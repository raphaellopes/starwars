// Vendors
import React, { FC, useEffect } from 'react';

// Locals
import { useCharacterHook, CharacterType } from '~store/ducks/characters';
import { Button } from '~components';
import { CharactersContainer } from './containers';

const Characters: FC = () => {
  const { dispatchers, data, loading } = useCharacterHook();
  const characters: CharacterType[] = Object.entries(data).map(
    (item) => item[1]
  );

  useEffect(() => {
    dispatchers.request();
  }, []);

  const handleClickNext = () => dispatchers.request(2);

  return (
    <>
      <CharactersContainer loading={loading} characters={characters} />
      <Button onClick={handleClickNext}>next</Button>
    </>
  );
};

export default Characters;
