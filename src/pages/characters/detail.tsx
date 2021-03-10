// Vendors
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Locals
import { useCharacterHook } from '~store/ducks/characters';
import { Detail } from '~components';

const CharactersDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { byId, dispatchers } = useCharacterHook();
  const data = byId(id);

  const { name, gender, hair_color, height, mass } = data || {};

  useEffect(() => {
    if (!data) {
      dispatchers.request(id);
    }
  }, [data]);

  return (
    <Detail
      title={name}
      characteristics={{ gender, 'hair color': hair_color, height, mass }}
    />
  );
};

export default CharactersDetail;
