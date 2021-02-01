// Vendors
import React, { FC } from 'react';

// Locals
import { SpeciesContainer } from './containers';

import mock from './mock';

const Species: FC = () => {
  const data = mock.map(({ name, description, image }) => ({
    name,
    description,
    image,
  }));

  return <SpeciesContainer species={data} />;
};

export default Species;
