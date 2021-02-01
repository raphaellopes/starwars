// Vendors
import React, { FC } from 'react';

// Locals
import { CharactersContainer } from './containers';

import mock from './mock';

const Characters: FC = () => {
  const data = mock.map(({ name, description, image }) => ({
    name,
    description,
    image,
  }));

  return <CharactersContainer characters={data} />;
};

export default Characters;
