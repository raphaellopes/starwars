// Vendors
import React, { FC } from 'react';

// Locals
import { CharactersContainer } from './containers';

import mock from './mock';

const Characters: FC = () => {
  const mockData = mock.map(({ name, description, image }) => ({
    name,
    description,
    image,
  }));

  return <CharactersContainer characters={mockData} />;
};

export default Characters;
